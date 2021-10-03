// document.addEventListener("DOMContentLoaded", function() {
//   setTimeout(() => {
//     var element = document.getElementById("mega-container");
//     console.log('Hello World')
//     html2pdf(element);
//   }, 5000);
//   console.log("Print");
// });



var opt = {
    filename:     'Abdul Samad.pdf',
    image:        { type: 'jpeg', quality: 1 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak:      { after: '.page-break'}  ,
    html2canvas: { scale: 3, y: 0,  scrollY: 0},
    
  };


const printPDF = () => {
    console.log('Hello Samad');
    setTimeout(() => {
        var element = document.getElementById("mega-container");
        console.log('Hello World', element)
        // html2pdf(element, opt);
        html2pdf().set(opt).from(element).save();
      }, 2000);
      console.log("Printed");

}

