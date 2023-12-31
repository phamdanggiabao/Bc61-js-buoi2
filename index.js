//----------------Dom------------
// Tương tác thay đổi nội dung của thẻ
//document.getElementById giúp gọi tới các phần tử html thông qua ID
// để có thể thay đổi nội dung, ta sẽ sử dụng lệnh innerHTML và gán một giá trị mới vào
document.getElementById("demo").innerHTML = "Hom nay troi mat";

// .container h1
document.querySelector(".container h1").innerHTML = "toi bi mat noi dung";


//gọi tới thẻ h2 và thay đổi cho thẻ
document.querySelector(".container h2").innerHTML = "i'm not h2 anymore";

//tương tác tới các thuôc tính của  thẻ
//lấy thuộc tính src
document.querySelector("img").src ="https://lienquan.garena.vn/files/skin/c5cdd906de9c6f1e2a9f349a0c8a64ad591e6990ac062.jpg"
var urImg =document.querySelector("img").src;
console.log(urImg);
//tạo một id mới
document.querySelector("img").id="img1"

//tương tác với các class trong thẻ
 var classTheP= document.querySelector('.noidung').className;
 console.log(classTheP);
//  document.querySelector('.noidung').className = "text-center text-danger" +classTheP;
 document.querySelector('.noidung').className += ' text-center text-danger';

 //class list.add giúp thêm một phần tử mới vào html
 document.querySelector('.noidung').classList.add('active');
 document.querySelector('.noidung').classList.remove('text-danger');

 //tương tác với các sự kiện  của thẻ 
 //sự kiên onclick 

 //xây dựng chức năng khi người dùng click vào nút tắt sẽ đổi màu bóng đèn thành màu đen và khi click vào nút bât sẽ mở bóng đèn 
 // xây dựng 2 chức năng onclick cho nút tắt và nút bật
 //khi bấm vào nút tắt thì đổi đường dẫn hình thành bóng đèn tắt và khi bấm nút bật thì ngược lại

 var btnTat= document.querySelector('.btn-danger');
 var btnBat= document.querySelector('.btn-success');
 var imgBongDen=   document.getElementById('bongden');

//  btnTat.style.display = 'none';
 btnTat.onclick = function () {
    //Nơi xử lí các hành động  khi người dùng click vào thẻ
    imgBongDen.src = './image/pic_bulboff.gif' ;
    console.log('tôi tên tắt');
    // btnBat.style.display = 'inline-block';
    // btnTat.style.display='none';
btnTat.style.opacity='0';
btnBat.style.opacity='1';
 }

 btnBat.onclick = function () {
    console.log('tôi tên bật')
    imgBongDen.src = './image/pic_bulbon.gif' ;
    btnBat.style.opacity='0';
    btnTat.style.opacity='1';
    //sử dụng inline style thông qua style
    // btnBat.style.display ='none';
    
    // btnTat.style.display='inline-block';
}


//--------------Tương tác với các thẻ input----------------
// document.getElementById('txt-taikhoan').value = "bao0704";


// document.querySelector('.btn-dark').onclick = function(){
//     var taiKhoan = document.getElementById('txt-taikhoan').value;
//     console.log(taiKhoan);

//     //Khi sử dụng select lưu ý nếu các option không có thuộc tính value thì khi gọi tới select để lấy value, value đó sẽ có nội dung mà option dc chọn

//     var chucVu = document.getElementById('txt-chucVu').value;
//     console.log(chucVu)

//     var passWord= document.getElementById('txt-password').value;
//     console.log(passWord);

//     // document.getElementById('ketqua').innerHTML ='Chào mừng tài khoản ' + taiKhoan + 'Chức vụ' + chucVu +'Với mật khẩu' + passWord;

//     //cộng chuỗi bằng kỹ thuật string template
//     document.getElementById('ketqua').innerHTML=`Chào mừng tài khoản ${taiKhoan},Chức vu ${chucVu},password ${passWord}`
// }


//yêu cầu tạo thêm môt thẻ div có class hoặc id tùy ý,nhiệm vụ của thẻ div đó là khi ng dùng nhập xong tài khoản chon chức vụ và mật khẩu thì sẽ hiển thị xuống div đã tạo đó

// chào mừng tài khoản + tài khoản của người dùng, chức vụ + chức vụ của ng dùng, mật khẩu + mật khẩu ng dùng

// yêu cầu nâng cao : xây dựng chức năng khi ng dùng click hiện mật khẩu cho người dùng thông qua nút botton xem mật khẩu 

// document.querySelector('.btn-primary').onclick =function () {
//     console.log('Xem mật khẩu');
//     // dom tới input password
//     document.getElementById('txt-password').type ='text';
// }




//Hướng dẫn tạo ra phần tử html
// Sử dụng thông qua cách tạo phần tử html bằng chuỗi html
document.getElementById('demoHTML').innerHTML = '<p> tới giờ về rồi</p>';

// Sử dụng thông qua cách tạo phần tử bằng createElemant 
var theImg =document.createElement('img');
theImg.src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg';
document.getElementById('demoHTML').appendChild(theImg);




document.querySelector('.btn-dark').onclick = function (){
    var taiKhoan =document.getElementById('txt-taikhoan').value;
    console.log(taiKhoan);
    var chucVu = document.getElementById('txt-chucVu').value ;
    console.log(chucVu);
    var passWord = document.getElementById('txt-password').value ;
    console.log(passWord);


    document.getElementById('ketqua').innerHTML = `Chao mung tai khoan ${taiKhoan}, voi chuc vu ${chucVu}, voi password ${passWord}`
}

document.querySelector('.btn-primary').onclick =function(){
    console.log('Xem mat khau');
    document.getElementById('txt-password').type = 'text';


}