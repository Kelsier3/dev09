$(function() {
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);

    //       $('table').append(e.type + ': ' + e.timeStamp)
  });

  $("#userFontInput").on("click", function(e) {
    $("table").append($(this).prop(":checked"));
    var inputFont = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont);
  });

  $("#userColorInput").on("click", function(e) {
    $("table").append($(this).prop(":checked"));
    var inputColor = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputColor);
  });

  $("#resetButton").on("click", function(e) {
    $(confirm("Press okay to confirm your purchase, press cancel to cancel"));
    var purchased = $(this).is("checked");
  });
});

function confirmwindow(purchased) {
  if (purchased) {
    $(alert("Thank you for purchasing one of our signs!"));
  } 
  else {
    $(alert("Order cancelled"));
  }
}

function updatePrice(signLength, fontUpgrade, colorUpgrade) {
  var costPerTile = 5;
  var upgradecosts1 = 0;
  var upgradecosts2 = 0;

  if (fontUpgrade) {
    upgradecosts1 = 1;
  } else {
    upgradecosts1 = 0;
  }

  if (colorUpgrade) {
    upgradecosts2 = 2;
  } else {
    upgradecosts2 = 0;
  }

  var totalcostpertile = costPerTile + upgradecosts1 + upgradecosts2;

  var subTotal = signLength * totalcostpertile;
  var shipping = 7;
  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}