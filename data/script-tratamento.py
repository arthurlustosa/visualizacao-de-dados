# -*- coding: utf-8 -*-
import csv

numeros = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9':0}
letras = {'a': 0, 'b':0, 'c':0, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':0, 'j':0, 'k':0, 'l':0, 'm':0, 'n':0, 'm':0, 'o':0, 'p':0, 'q':0, 'r':0, 's':0 , 't':0, 'u':0, 'w':0, 'x':0, 'y':0, 'z':0}
especiais = {' ':0, '/':0, '*':0, '-':0, '+':0, '.':0, '<':0, '>':0, ',':0, ';':0, '?':0, '!':0, "'":0, '"':0, '@':0, '#':0, '$':0, '%':0, '&':0, '(':0, ')':0, '=':0, '[':0, ']':0, '{':0, '}':0}
count_n = 0
count_l = 0
count_c = 0

with open('dados.csv') as csvfile:
	reader = csv.DictReader(csvfile)
	for row in reader:
		q4 = list(row['q4'])
		for l in q4:
			l = l.lower()
			if l in letras:
				letras[l] = letras[l] + 1
				count_l = count_l + 1
		q5 = list(row['q5'])
		for l in q5:
			l = l.lower()
			if l in letras:
				letras[l] = letras[l] + 1
				count_l = count_l + 1
				
for letra in letras.keys():
	print letra, ("%.2f" % (letras[letra]*100.0/count_l))
		


		
