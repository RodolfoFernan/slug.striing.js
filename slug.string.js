/ * 
	Criar SLUG a partir de uma string
	Esta função reescreve o protótipo da string e também 
	substitua o latim e outros caracteres especiais.
	Bifurcado por Gabriel Froes - https://gist.github.com/gabrielfroes
	Autor Original: Mathew Byrne - https://gist.github.com/mathewbyrne/1280286
 * /
if  ( ! String . prototype . slugify )  {
	String . protótipo . slugify  =  function  ( )  {

	devolva   isso . toString ( ) . toLowerCase ( )
	. substituir ( / [ àÀáÁâÂãäÄÅåª ] + / g ,  'a' )        // Caracteres especiais # 1
	. substituir ( / [ èÈéÉêÊëË ] + / g ,  'e' )        	// Caracteres especiais # 2
	. substituir ( / [ ìÌíÍîÎïÏ ] + / g ,  'i' )        	// Caracteres especiais # 3
	. substituir ( / [ òÒóÓôÔõÕöÖº ] + / g ,  'o' )        	// Caracteres especiais # 4
	. substituir ( / [ ùÙúÚûÛüÜ ] + / g ,  'u' )        	// Caracteres especiais # 5
	. substituir ( / [ ýÝÿŸ ] + / g ,  'y' )        		// Caracteres especiais # 6
	. substituir ( / [ ñÑ ] + / g ,  'n' )        			// Caracteres especiais # 7
	. substituir ( / [ çÇ ] + / g ,  'c' )        			// Caracteres especiais # 8
	. substituir ( / [ ß ] + / g ,  'ss' )        			// Caracteres especiais # 9
	. substituir ( / [ Ææ ] + / g ,  'ae' )        			// Caracteres especiais # 10
	. substituir ( / [ Øøœ ] + / g ,  'oe' )        		// Caracteres especiais # 11
	. substituir ( / [ % ] + / g ,  'pct' )        			// Caracteres especiais # 12
	. substituir ( / \ s + / g ,  '-' )            		// Substituir espaços por -
    . substituir ( / [ ^ \ w \ - ] + / g ,  '' )        		// Remover todos os caracteres não-word
    . substituir ( / \ - \ - + / g ,  '-' )          		// Substituir múltiplo - por único -
    . substituir ( / ^ - + / ,  '' )              		// Cortar - do início do texto
    . substituir ( / - + $ / ,  '' ) ;             		// Cortar - do final do texto
    
	} ;
}