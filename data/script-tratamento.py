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
		q1 = list(row['q1'])
		q4 = list(row['q4'])
		
		for n in q1:
			if n in numeros:
				numeros[n] = numeros[n]+1
				count_n = count_n + 1
			
		for l in q4:
			if l.lower() in letras:
				letras[l.lower()] = letras[l.lower()]+ 1
				count_l = count_l + 1
				
		for c in q4:
			if c in especiais:
				especiais[c] = especiais[c] + 1
				count_c = count_c + 1
				
		
print numeros
print letras
print especiais
		
