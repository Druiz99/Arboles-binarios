var ab = new ArbolBinario();



document.getElementById('add').addEventListener('click', function () {
    var num = document.getElementById('texto').value
    var nuevo = new Nodo(num);
    ab.add(nuevo)
});


document.getElementById('in').addEventListener('click',function () {
    document.getElementById('imprime').innerHTML = ab.inOrder()
})

document.getElementById('pre').addEventListener('click', function () {
    document.getElementById('imprime').innerHTML = ab.preOrder()
})

document.getElementById('pos').addEventListener('click', function () {
    document.getElementById('imprime').innerHTML = ab.posOrder()
})

