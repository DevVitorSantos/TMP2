

const marcasComMaisModelos = (carros) => {
    // Criando um mapa para contar quantos modelos cada marca possui
    const contagem = new Map();
    
    // Percorrendo o array de carros e contando os modelos para cada marca
    carros.map(({ brand, models }) => {
        if (contagem.has(brand)) {
            contagem.set(brand, contagem.get(brand) + models.length);
        } else {
            contagem.set(brand, models.length);
        }
    });

    // Encontrando o número máximo de modelos entre as marcas
    const maxModelos = Math.max(...contagem.values());

    // Filtrando as marcas que possuem o número máximo de modelos
    const marcasVencedoras = [...contagem.entries()]
        .filter(([_, modelos]) => modelos === maxModelos)
        .map(([marca, _]) => marca);

    // Verificando se houve empate
    if (marcasVencedoras.length === 1) {
        return marcasVencedoras[0]; // Retorna a marca vencedora caso não haja empate
    } else {
        return marcasVencedoras; // Retorna a lista de marcas em caso de empate
    }
}

const marcaComMenosModelos = (carros) => {
    // Criando um mapa para contar quantos modelos cada marca possui
    const contagem = new Map();
    
    // Percorrendo o array de carros e contando os modelos para cada marca
    carros.map(({ brand, models }) => {
        if (contagem.has(brand)) {
            contagem.set(brand, contagem.get(brand) + models.length);
        } else {
            contagem.set(brand, models.length);
        }
    });

    // Encontrando o número mínimo de modelos entre as marcas
    const minModelos = Math.min(...contagem.values());

    // Filtrando as marcas que possuem o número mínimo de modelos
    const marcasPerdedoras = [...contagem.entries()]
        .filter(([_, modelos]) => modelos === minModelos)
        .map(([marca, _]) => marca);

    // Verificando se houve empate
    if (marcasPerdedoras.length === 1) {
        return marcasPerdedoras[0]; // Retorna a marca perdedora caso não haja empate
    } else {
        return marcasPerdedoras; // Retorna a lista de marcas em caso de empate
    }
}


const listaMaisModelos = (carros, X) => {
    // Criando um mapa para contar quantos modelos cada marca possui
    const contagem = new Map();
    
    // Percorrendo o array de carros e contando os modelos para cada marca
    carros.map(({ brand, models }) => {
        if (contagem.has(brand)) {
            contagem.set(brand, contagem.get(brand) + models.length);
        } else {
            contagem.set(brand, models.length);
        }
    });

    // Ordenando as marcas pela quantidade de modelos em ordem decrescente
    const marcasOrdenadas = [...contagem.entries()].sort((a, b) => b[1] - a[1]);

    // Selecionando as X primeiras marcas
    const marcasTopX = marcasOrdenadas.slice(0, X);

    // Formatando o resultado
    const resultado = marcasTopX.map(([marca, quantidade]) => `${marca} - ${quantidade}`);

    return resultado;
}

const listaMenosModelos = (carros, X) => {
    // Criando um mapa para contar quantos modelos cada marca possui
    const contagem = new Map();
    
    // Percorrendo o array de carros e contando os modelos para cada marca
    carros.map(({ brand, models }) => {
        if (contagem.has(brand)) {
            contagem.set(brand, contagem.get(brand) + models.length);
        } else {
            contagem.set(brand, models.length);
        }
    });

    // Ordenando as marcas pela quantidade de modelos em ordem crescente
    const marcasOrdenadas = [...contagem.entries()].sort((a, b) => a[1] - b[1]);

    // Selecionando as X primeiras marcas
    const marcasTopX = marcasOrdenadas.slice(0, X);

    // Formatando o resultado
    const resultado = marcasTopX.map(([marca, quantidade]) => `${marca} - ${quantidade}`);

    return resultado;
}

const listaModelosPorMarca = (carros, marca) => {
    // Convertendo o nome da marca para minúsculas
    const marcaLowerCase = marca.toLowerCase();

    // Buscando a marca no array de carros e retornando seus modelos, caso exista
    const modelos = carros.find(carro => carro.brand.toLowerCase() === marcaLowerCase)?.models || [];

    return modelos;
}


export default {
    marcasComMaisModelos,
    marcaComMenosModelos,
    marcasComMaisModelos,
    listaMaisModelos,
    listaMenosModelos,
    listaModelosPorMarca
}