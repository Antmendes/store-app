export interface IProduct {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProductCart extends IProduct{
    quantidade: number;

}

export const products: IProduct[] = [
    { id: 1, descricao: "Mouse gamer", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque:7 },
    { id: 2, descricao: "Monitor Apple", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-1.jpg", quantidadeEstoque:10 },
    { id: 3, descricao: "Teclado Advanced", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque:13 },
    { id: 4, descricao: "Fone Sony", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque:18 },
    { id: 5, descricao: "Fone sem fio", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque:9 },
    { id: 6, descricao: "Fone Professional", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque:7 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque:6 },
    { id: 8, descricao: "2 placas de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque:4 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque:5 },
    { id: 10, descricao: "Notebook Acer", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque:8 },
    { id: 11, descricao: "Notebook Dell", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque:4 },
    { id: 12, descricao: "Mouse simples", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque:7 },
    { id: 13, descricao: "Mouse pro sem fio", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque:10 },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque:8 },
    { id: 15, descricao: "Teclado pro", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque:11 },
]