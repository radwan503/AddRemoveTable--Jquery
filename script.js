$(document).ready(function () {
  const addInventoryBtn = document.querySelector('.add-inventory-Btn');
  const showTable = document.querySelector('#showTable');
  var rowIndex = 0;
  addInventoryBtn.addEventListener('click', function () {
      const ItemType = document.querySelector('#ItemType').value;
      const location = document.querySelector('#location').value;
      const quantity = document.querySelector('#quantity').value;
      const uom = document.querySelector('#uom').value;
      const requisitionDate = document.querySelector('#requisitionDate').value;
      const purpose = document.querySelector('#purpose').value;
      const itemDescription = document.querySelector('#itemDescription').value;

      var tableRow =
              " <tr id='R" + ++rowIndex + "'>" +
              "<td class='row-index'><p>"+ rowIndex +"</p></td>" +
              "<td>" + ItemType + "</td>" +
              "<td>" + location + "</td>" +
              "<td> " + quantity + "</td>" +
              "<td> " + uom + "</td>" +
              "<td> " + requisitionDate + "</td>" +
              "<td> " + purpose + "</td>" +
              "<td> " + itemDescription + "</td>" +

              "<td><button type='button' class='btn btn-primary a-btn-slide-text custom-remove-btn remove-inventory-row'>" +
              "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></td>" +

              "</tr>";

      $(showTable).append(tableRow);

      document.querySelector('#ItemType').value='';
      document.querySelector('#location').value='';
      document.querySelector('#quantity').value='';
      document.querySelector('#uom').value='';
      document.querySelector('#requisitionDate').value='';
      document.querySelector('#purpose').value='';
      document.querySelector('#itemDescription').value='';
  });

  // jQuery button click event to remove a row.
  $('#showTable').on('click', '.remove-inventory-row', function () {
      var child = $(this).closest('tr').nextAll();
      child.each(function () {
          var id = $(this).attr('id');
          var idx = $(this).children('.row-index').children('p')
           //Gets the row number from <tr> id.
          var dig = parseInt(id.substring(1));
          // Modifying row index.
          idx.html(dig - 1);
          // Modifying row id.
          var RowUpdate = dig-1;
          $(this).attr('id','R'+RowUpdate)

      });
      $(this).closest('tr').remove();
      rowIndex--;
  });
});