	var width = 1000,
    	height = 900;

	var svg = d3.select("#map1")
				.append("svg")
				.attr('version', '1.1')
				.attr('viewBox', '0 0 '+width+' '+height)
				.attr('width', '100%')
				.attr('class', 'map-chart');

    var projection = d3.geoAlbers()
        .center([-40.388610, -6.397366])
        .rotate([0, 0])
        .parallels([0, 0])
        .scale(2500);

    var path = d3.geoPath().projection(projection);

	var populacaoScale = d3.scaleThreshold();

    d3.queue()
			.defer(d3.json,"data/dados/municipios_sab.json")
			.defer(d3.json, "data/dados/estados_sab.json")
			.defer(d3.csv, "data/dados/dados_snis_filtrados/dados_agua_semiarido_2015.csv")
			.defer(d3.json, "data/br.json")
			.await(draw);

	function draw(error, semiarido, estados, csv, brasil) {
      if (error) throw error;


      var estados = topojson.feature(estados, estados.objects.sab_geojson);

	  var brasil = topojson.feature(brasil, brasil.objects.estados);

    // Desenhando Brasil
	svg.selectAll(".estado")
		.data(brasil.features)
		.enter()
		.append("path")
		.attr("class", "brasil")
		.attr("d", path);
	  
      var municipios = topojson.feature(semiarido, semiarido.objects.municipios_sab);

	  populacaoScale
      	.domain([5000, 10000, 30000, 50000, 100000])
    	.range([d3.rgb(84, 39, 143, 0.2), d3.rgb(84, 39, 143, 0.4), d3.rgb(84, 39, 143, 0.6), d3.rgb(84, 39, 143, 0.8), d3.rgb(84, 39, 143, 1)]);

	  var tooltip = svg.append("text").attr("class", "label");




      //desenhando municipios
      svg.selectAll(".municipio")
        .data(municipios.features)
      .enter().append("path")
      	.attr("id", function(d) { var d1 = d.properties.ID.toString().substring(0, 6); return "demanda-"+d1 })
        .attr("d", path)
        .attr("class", "municipio")
		.on("mouseover", function(d) {
					tooltip
						.attr("x", path.centroid(d)[0])
						.attr("y", path.centroid(d)[1])
						.attr("transform", "translate(0, -25)")
						.style("fill", "red")
						.text(getRow(d.properties.ID).municipio);
						
				});

        

        for (var i=0; i < csv.length; i++) {
            var municipio = csv[i];
      		if (municipio.ID) {
                if (municipio.populacao_urbana !== "NA") {
                svg.select("#demanda-"+municipio.ID)
        		.attr("fill", populacaoScale(+municipio.populacao_urbana))
                } else {
                svg.select("#demanda-"+municipio.ID)
        		.attr("fill", "white")
                }
            }
   			
        }

    //funcao que retorna a localidade
	function getRow(id) {
		for (var i = 0; i < csv.length; i++) {
			if (csv[i].ID == id.toString().substring(0, 6)){
				return csv[i];
				break;
			}
        }
	}

	// contorno dos estados do semiárido
	svg.append("path")
		.datum(estados)
		.attr("d", path)
		.attr("class", "estados");
    	




    }