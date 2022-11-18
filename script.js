$(document).ready(function (){
    $.ajax({
        url: "data.json",
        success: function(data) {
            data.cartoons.forEach(cartoons => {
                $("table tbody").append(`
                <tr class="name">
                    <td>${cartoons.CartoonName}</td>
                    <td>${cartoons.CharacterFirstName}</td>
                    <td>${cartoons.CharacterLastName}</td>
                    <td>${cartoons.Creator}</td>
                    <td>${cartoons.YearRelased}</td>
                    <td>${cartoons.Rating}</td>
                </tr>
                `);
            
                let data1 = 0;
                let data2 = 0;
                let CharacterFirstName = cartoons.CharacterFirstName[0].toLowerCase();
                if (CharacterFirstName.match(/[a-mA-M]/)) {
                    data1++;
                } else {
                    data2++;
                }
            });
        }
    });      

    $("#searchButton1").click(function(e){
        $("#cartoons tr:not(:first-child)").filter(function (e) {
            var valueData = $(this).find("td:eq(1)").text();
            
                if (valueData.includes("A") || valueData.includes("B") || valueData.includes("C") || valueData.includes("D") || valueData.includes("E") || valueData.includes("F") || valueData.includes("G") || valueData.includes("H") || valueData.includes("I") || valueData.includes("J") || valueData.includes("K") || valueData.includes("L") || valueData.includes("M")) {
                    $(this).show();
                }
                else
                {
                    $(this).hide();
                }
                dataSave = $('tr:visible').length;

                $('#button1').text(`( ${dataSave - 1} )`);
                $('#button2').text("");
        });
    });
        
    $("#searchButton2").click(function(e){ 
        $("#cartoons tr:not(:first-child)").filter(function (e) {
            var valueData = $(this).find("td:eq(1)").text();
            
            if (valueData.includes("O") || valueData.includes("P") || valueData.includes("Q") || valueData.includes("R") || valueData.includes("S") || valueData.includes("T") || valueData.includes("U") || valueData.includes("V") || valueData.includes("W") || valueData.includes("X") || valueData.includes("Y") || valueData.includes("Z")) {
                $(this).show();
            }
            else
            {
                $(this).hide();
            }
            dataSave = $('tr:visible').length;

            $('#button2').text(`( ${dataSave - 1} )`);
            $('#button1').text("");
        });
    });

    $("#search").keydown(function(e){
        $("#cartoons").each(function( index ) {
            var rowData=$("tbody").find("tr").show();

            $("tbody tr").each(function (td) {
                let value = $(this).text().toLowerCase();

                // console.log(value);
                //console.log(rowData);

                if(value.includes(e.target.value.toLowerCase())) {
                    $(this).css("background-color", "DarkGreen");
                } else {
                    $(this).css("background-color", "");
                }
            }); 
        });
    });
});
