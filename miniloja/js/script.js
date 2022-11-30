"use strict";
class Produto{
	constructor(codigo,nome,imagem,promocao,preco,desconto){
		this.codigo = codigo;
		this.nome = nome;
		this.imagem = imagem;
		this.promocao = promocao;
		this.preco = preco;
		this.desconto = desconto;
	}
    lista(products){
		var lista = document.getElementById("lista");
		for(var i=0; i < products.length; i++){
let produto = new Produto(products[i].codigo,products[i].nome,products[i].imagem,products[i].promocao,products[i].preco,products[i].desconto);

var column, thumbnail, title, image, old_price, 
price, btn;
column = document.createElement("div");
thumbnail = document.createElement("div");
title = document.createElement("h1");
image = document.createElement("img");
		old_price = document.createElement("small");
		price = document.createElement("p");
		btn = document.createElement("a");
		column.classList.add("col-xs-12");
		column.classList.add("col-sm-6");
		column.classList.add("col-md-4");
		column.classList.add("col-lg-4");
		thumbnail.classList.add("thumbnail");
		title.classList.add("text-center");
		old_price.classList.add("old-price");
		price.classList.add("price");
		btn.classList.add("btn");
		btn.classList.add("btn-primary");
		btn.innerHTML = "Comprar";
		title.innerHTML = produto.nome;
		image.setAttribute("src",produto.imagem);
        if(produto.promocao == true){
            old_price.innerHTML = "R$" + produto.preco;
            price.innerHTML = "R$" + (produto.preco - produto.desconto);
           }else{
            old_price.setAttribute("display","none");
            price.innerHTML = "R$" + produto.preco;
           }
           thumbnail.appendChild(title);
           thumbnail.appendChild(image);
           thumbnail.appendChild(old_price);
           thumbnail.appendChild(price);
           thumbnail.appendChild(btn);
           column.appendChild(thumbnail);
           lista.appendChild(column);

    }
    }
}
           var products = [
            {
                codigo: 1,
                nome:"calça jeans com rasgo clara",
                imagem: "img/1.jpg",
                promocao: true,
                preco: 120.00,
                desconto: 20.00
            },
    
            {
                codigo: 2,
                nome: "calça jeans clara",
                imagem: "img/2.jpg",
                promocao: true,
                preco: 99.99,
                desconto: 20.00
            },
            {
                codigo: 3,
                nome: "calça jeans azul escuro",
                imagem: "img/3.jpg",
                promocao: true,
                preco: 150.00,
                desconto: 20.00

            },
        ]
              let produto = new Produto();
              produto.lista(products);  
             