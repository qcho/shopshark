hci.fetch(hci.GetOrderList($.cookie('username'), $.cookie('token')),function(orderListResp){
    //console.info($(orderListResp).text());
});
<response status='ok'>
  <orders>
    <order id='609'>
      <address_id />
      <status>1</status>
      <created_date>2010-10-18</created_date>
      <confirmed_date></confirmed_date>
      <shipped_date></shipped_date>
      <delivered_date></delivered_date>
      <latitude>0</latitude>
      <longitude>0</longitude>
    </order>
  </orders>
</response>



hci.fetch(hci.CreateOrder($.cookie('username'), $.cookie('token')),function(orderResp){
    //console.info($(orderResp).text());
});
<response status='ok'>
  <order id='609' />
</response>




hci.fetch(hci.AddOrderItem($.cookie('username'), $.cookie('token'), "609", "1", "5"),function(orderResp){
    //console.info($(orderResp).text());
});
<response status='ok' />



hci.fetch(hci.GetOrder($.cookie('username'), $.cookie('token'), "609"),function(orderListResp){
    //console.info($(orderListResp).text());
});
<response status='ok'>
  <order id='609'>
    <address_id />
    <status>1</status>
    <created_date>2010-10-18</created_date>
    <confirmed_date></confirmed_date>
    <shipped_date></shipped_date>
    <delivered_date></delivered_date>
    <latitude>0</latitude>
    <longitude>0</longitude>
    <items>
      <item id='570'>
        <product_id>1</product_id>
        <count>5</count>
        <price>27.99</price>
      </item>
    </items>
  </order>
</response>



hci.fetch(hci.CreateAddress($.cookie('username'), $.cookie('token'), "Home", "home1", "home2", "1", "1", "1", "1234", "43211234")
,function(resp){
    //console.info($(resp).text());
});
<response status='ok'>
  <address id='278' />
</response>




hci.fetch(hci.ConfirmOrder($.cookie('username'), $.cookie('token'), "609", "278")
,function(resp){
    //console.info($(resp).text());
});
<response status='ok' />



hci.fetch(hci.GetAddress($.cookie('username'), $.cookie('token'), "279")
,function(resp){
    //console.info($(resp).text());
});
<response status='ok'>
  <address id='279'>
    <full_name>Home</full_name>
    <address_line_1>home1</address_line_1>
    <address_line_2>home2</address_line_2>
    <country_id>1</country_id>
    <state_id>1</state_id>
    <city>1</city>
    <zip_code>1234</zip_code>
    <phone_number>43211234</phone_number>
  </address>
</response>