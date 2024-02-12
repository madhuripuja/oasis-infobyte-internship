
    function convertToCelsius() {
        var fahrenheit_input = document.getElementById("fahrenheit").value;
        var celsius_output = (fahrenheit_input - 32) * 5 / 9;
        document.getElementById("celsius").value = celsius_output.toFixed(2);
    }

    function convertToFahrenheit() {
        var celsius_input = document.getElementById("celsius").value;
        var fahrenheit_output = (celsius_input * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit_output.toFixed(2);
    }
