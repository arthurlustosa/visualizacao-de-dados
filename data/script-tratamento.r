library(dplyr)


dados <- read.csv("pessoas aleatórias digitando coisas aleatórias-report.csv", stringsAsFactors = F)

names(dados) <- c("id", "q1", "q2", "q3", "q4", "q5", "q6", "q7", "start", "end", "network.id")


#q1 um esquente: digite um número de 0 a 9*
#q2 agora uma sequência numérica aleatória que preencha todo o campo abaixo*
#q3 você consegue ser mais aleatório?*
#q4 agora uma digitação aleatória usando todo o teclado*
#q5 e uma última, por favor
#q6 quão aleatório você acha que foi?*  (0 nada, 10 totalmente)
#q7 quão aleatório você acha que você é?* (0 nada, 10 totalmente)



dados$q1 <- as.integer(dados$q1)
dados$q2 <- as.integer(dados$q2)
dados$q3 <- as.integer(dados$q3)
