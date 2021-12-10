#By Vivek Kumar

// Enter the credentials to automate login flow via JS
javascript: (function () {
  function autofull(ele, val) {
    if (document.getElementById(ele) && val != "") {
      document.getElementById(ele).value = val;
    }
  }
  autofull("TextBox1", "VENDOR_CODE");
  autofull("TextBox2", "VENDOR_PASSWORD");
  autofull("DropDownList1", "Supplier");
  document.getElementById("Button1").click();
})();

//***************************************************************************************************************************************************************************
// Navigates to CreateASN page
javascript: (function () {
  javascript: {
    __doPostBack("CreateASN", "");
    return 0;
  }
})();

//***************************************************************************************************************************************************************************
// From the create ASN page fetches the CreateASN text and Vendor name alongwith Vendor code
javascript: (function () {
  javascript: {
    return (
      document.getElementsByTagName("h1")[0].innerHTML +
      ",," +
      document.getElementsByTagName("span")[9].innerHTML +
      ",," +
      document.getElementsByTagName("span")[10].innerHTML
    );
  }
})();

//***************************************************************************************************************************************************************************
// On the fill details page autofill the details. Only requires the mandatory fields
javascript: (function () {
  function autofull(ele, val) {
    if (document.getElementById(ele) && val != "") {
      document.getElementById(ele).value = val;
    }
  }
  autofull("ctl00_ContentPlaceHolder1_DropDownList3", "part_no");
  autofull("ctl00_ContentPlaceHolder1_Txtdeliverydate", "dry_date");  //Delivery Date is generated with concept:[Today's Date + 10 day concept]
  autofull("ctl00_ContentPlaceHolder1_DropDownList2", "Road");
  autofull("ctl00_ContentPlaceHolder1_Txtcontainerno", "1234");
  autofull("ctl00_ContentPlaceHolder1_Txtinvno", "inv_no");
  autofull("ctl00_ContentPlaceHolder1_TextBox4", "inv_date");
})();

//***************************************************************************************************************************************************************************
// Auto fetches the partnumbers and passes it to the front 
javascript: (function() {
    javascript: {
        var values = Array.from(document.getElementById("ctl00_ContentPlaceHolder1_DropDownList3").options).map(e => e.value);
        return values;
    }
})();


//***************************************************************************************************************************************************************************
// Clicks and submits the filled details page to view checkrow
javascript: (function () {
  function autofull(ele, val) {
    if (document.getElementById(ele) && val != "") {
      document.getElementById(ele).value = val;
    }
  }
  document.getElementById("ctl00_ContentPlaceHolder1_Button1").click();
})();

//***************************************************************************************************************************************************************************
// Auto checks the Checkrow's radiobutton
javascript: (function () {
  function autofull(ele, val) {
    if (document.getElementById(ele) && val != "") {
      document.getElementById(ele).value = val;
    }
  }
  document
    .getElementById("ctl00_ContentPlaceHolder1_GridView1_ctl02_chkRow")
    .click();
})();

//***************************************************************************************************************************************************************************
// Autofills/Autoselects PM-0100-Box
javascript: (function () {
  function autofull(ele, val) {
    if (document.getElementById(ele) && val != "") {
      document.getElementById(ele).value = val;
    }
  }
  autofull(
    "ctl00_ContentPlaceHolder1_GridView1_ctl02_DropDownList4",
    "PM-0100-Box"
  );
  javascript: setTimeout(
    "__doPostBack('ctl00$ContentPlaceHolder1$GridView1$ctl02$DropDownList4','')",
    0
  );
})();

//***************************************************************************************************************************************************************************
// Only Quantity needs to be fed. Others are autofilled like no of box etc.
javascript: (function () {
  function autofull(ele, val) {
    if (document.getElementById(ele) && val != "") {
      document.getElementById(ele).value = val;
    }
  }
  autofull("ctl00_ContentPlaceHolder1_GridView1_ctl02_Textbox1", "quty");
  autofull("ctl00_ContentPlaceHolder1_GridView1_ctl02_Textbox2", "1");
  javascript: setTimeout(
    "__doPostBack('ctl00$ContentPlaceHolder1$GridView1$ctl02$Textbox2','')",
    0
  );
  document.getElementById("ctl00_ContentPlaceHolder1_Button2").click(); // this submit brings the user to final quality report upload page
})();

//***************************************************************************************************************************************************************************
// Final Submit
javascript: (function () {
  function autofull(ele, val) {
    if (document.getElementById(ele) && val != "") {
      document.getElementById(ele).value = val;
    }
  }
  document.getElementById("ctl00_ContentPlaceHolder1_Button3").click();
  javascript: setTimeout(
    "__doPostBack('ctl00$ContentPlaceHolder1$Button3','')",
    0
  );
})();
