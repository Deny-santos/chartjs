const ctx = document.getElementById('chart').getContext("2d")

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        // backgroundColor: 'rgba(255, 99, 132)', // para alguns graficos
        // borderColor: "rgba(41, 128,185,1.0)", // tbm para alguns casos
        data: [12, 19, 26, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      tooltips: { //quando passa o mouse e aparece as info, nao ta funfando por algun motivo




            enabled: true,
            intersect:false
      },
      scales: { // aqui vc muda as linhas de fundo, se miostra ou não ...
        y: {
          beginAtZero: true
        }
      },
      animation: {
        duration: 2000, //velocidade inicial do grafico
        easing: "easeOutBounce" // veja os outros na doc
      },
      layout: {
        padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
        }
      },
      title: { //nao sei pq não esta funfando 
        display: true,
        text: "meu grafico de cores",
        fontSize: "20px"
      },
      legend: { // tbm não ta funcionando
        display: true,
        position: "bottom"
      },
      
      
    }
  });

  //posso editar o grafico via dom, usando buttoes
  //acessando tipo o chat.data.datasets[0].data.length
  //https://youtu.be/OnmaeSnIEek link do video