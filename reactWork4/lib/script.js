var baslik=document.getElementById("baslik")
var metin=document.getElementById("metin")

metin.innerHTML=baslik.innerHTML

var listeler=document.getElementsByTagName("ul")
var sehirler=listeler[0]

var SehirElemanlari = sehirler.getElementsByTagName("li")

for(i=0;i<SehirElemanlari.length;i++){
    alert(SehirElemanlari[i].innerHTML)
}

var paragraflar = document.getElementsByClassName("a")
paragraflar[0].innerHTML="BAŞARI"

for(i=0;i<paragraflar.length; i++){
    paragraflar[i].innerHTML=paragraflar[i].innerHTML+" "+i
}

var div1=document.getElementById("div1")
var p2=document.getElementById("p2")

div1.insertBefore(baslik.p2)
alert("p2 kaldırılıyor")
div1.removeChild(p2)

const deger=22; /*bu değer artık değiştirilemez */

class Personel{
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }

    kaydet(){
        console.log("Personel kayıt işlemi tamamlandı.", this.ad)

    }
}

const personel1=new Personel("Ezgi","Elif")
const personel2=new Personel("Betül","Elif")

personel2.kaydet()
console.log(personel2.ad)
personel1.kaydet()
