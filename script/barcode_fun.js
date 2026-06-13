// function generateBarcode() {
//     const value = document.getElementById("bcode").value;

//     if (value.trim() === "") {
//         alert("Please enter some text.");
//         return;
//     }

//     JsBarcode("#barcode", value, {
//         format: "CODE128",
//         width: 2,
//         height: 100,
//         displayValue: true
//     });
// }

// document
//     .getElementById("generateBtn")
//     .addEventListener("click", generateBarcode);


const barcodeInput = document.getElementById("bcode");

barcodeInput.addEventListener("input", () => {

    const value = barcodeInput.value.trim();

    if (value === "") {
        document.getElementById("barcode").innerHTML = "";
        return;
    }

    JsBarcode("#barcode", value, {
        format: "CODE128"
    });

});