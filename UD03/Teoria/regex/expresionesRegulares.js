/* 
    Regex para un correo:
    Parte de usuario:
    ^[a-z] => Comienza por una letra minuscula
    [a-z0-9-_.]{1,18} => Puede contener hasta 18 letras minusculas,mayusculas numeros, guion, guion bajo y punto.
    [a-z09]$ => termina con una letra minuscula o un numero.
    @ => una arroba
    
    Parte de dominio:
    ^[a-z] => Comienza por una letra minuscula
    [a-z0-9-_.]{1,18} => Puede contener hasta 18 letras minusculas,mayusculas numeros, guion, guion bajo y punto.
    [a-z09]$ => termina con una letra minuscula o un numero.

    Parte de extension:
    ^[.] =>Empieza por punto
    [a-z]${2,4} => admite minusculas de la a-z entre 2 y cuatro

    El regex para validar correo queda asi:
    ^[a-z][a-z0-9-_.]{1,18}[a-z09]@[a-z][a-z0-9-_.]{1,18}[a-z09][.][a-z]${2,4}
/*