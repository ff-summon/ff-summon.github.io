var characters = [{'name':'Crab Long Bao','rate':0.23,'rarity':'ur','type':'def','portrait':'img/clb.jpg'}, {'name':'Foie Gras','rate':0.61,'rarity':'ur','type':'mag','portrait':'img/foie.jpg'},{'name':'B-52','rate':0.61,'rarity':'ur','type':'mag','portrait':'img/b52.jpg'},{'name':'Peking Duck','rate':0.61,'rarity':'ur','type':'mag','portrait':'img/peking.jpg'},
{'name':'Bamboo Rice','rate':0.62,'rarity':'ur','type':'atk','portrait':'img/br.jpg'},{'name':'Gingerbread','rate':0.23,'rarity':'ur','type':'def','portrait':'img/ginger.jpg'},{'name':'Boston Lobster','rate':0.05, 'rarity':'ur','type':'atk','portrait':'img/bl.jpg'}, {'name':'Double Scoop','rate':0.05,'rarity':'ur','type':'mag','portrait':'img/ds.jpg'},
{'name':'Tiramisu','rate':0.72,'rarity':'sr','type':'sup','portrait':'img/tira.jpg'},{'name':'Escargot','rate':0.72,'rarity':'sr','type':'def','portrait':'img/esc.jpg'},{'name':'Hotdog','rate':0.72,'rarity':'sr','type':'atk','portrait':'img/hd.jpg'},{'name':'Mango Pudding','rate':0.72,'rarity':'sr','type':'atk','portrait':'img/mp.jpg'},
{'name':'Hamburger','rate':0.72,'rarity':'sr','type':'atk','portrait':'img/hb.jpg'}, {'name':'Steak','rate':0.72,'rarity':'sr','type':'def','portrait':'img/ste.jpg'}, {'name':'Tangyuan','rate':0.72,'rarity':'sr','type':'sup','portrait':'img/tang.jpg'}, {'name':'Sanma','rate':0.72,'rarity':'sr','type':'atk','portrait':'img/san.jpg'},
{'name':'Salad','rate':0.72,'rarity':'sr','type':'sup','portrait':'img/salad.jpg'},{'name':'Napoleon Cake','rate':0.76,'rarity':'sr','type':'mag','portrait':'img/napoleon.jpg'}, {'name':'Pastel de Nata','rate':0.72,'rarity':'sr','type':'atk','portrait':'img/pdn.jpg'}, {'name':'Yuxiang','rate':0.72,'rarity':'sr','type':'atk','portrait':'img/yux.jpg'},
{'name':'Sukiyaki','rate':0.72,'rarity':'sr','type':'def','portrait':'img/suki.jpg'},{'name':'Brownie','rate':0.72,'rarity':'sr','type':'mag','portrait':'img/brownie.jpg'}, {'name':'Red Wine','rate':0.72,'rarity':'sr','type':'atk','portrait':'img/rw.jpg'},{'name':'Gyoza','rate':0.72,'rarity':'sr','type':'def','portrait':'img/gyo.jpg'},
{'name':'Chocolate','rate':0.72,'rarity':'sr','type':'mag','portrait':'img/choc.jpg'}, {'name':'Udon','rate':0.72,'rarity':'sr','type':'mag','portrait':'img/udon.jpg'} ,{'name':'Sweet Tofu','rate':0.72,'rarity':'sr','type':'sup','portrait':'img/st.jpg'},{'name':'Eggette','rate':1.46,'rarity':'sr','type':'mag','portrait':'img/ege.jpg'},
{'name':'Pineapple Cake','rate':1.47,'rarity':'sr','type':'mag','portrait':'img/pinc.jpg'}, {'name':'Long Bao','rate':4.13,'rarity':'r','type':'mag','portrait':'img/lb.jpg'},{'name':'Coffee','rate':4.13,'rarity':'r','type':'mag','portrait':'img/coffee.jpg'}, {'name':'Sashimi','rate':4.13,'rarity':'r','type':'atk','portrait':'img/sash.jpg'},
{'name':'Macaron','rate':4.13,'rarity':'r','type':'mag','portrait':'img/mac.jpg'}, {'name':'Zongzi','rate':4.13,'rarity':'r','type':'atk','portrait':'img/zong.jpg'}, {'name':'Sakuramochi','rate':4.13,'rarity':'r','type':'mag','portrait':'img/sakura.jpg'}, {'name':'Tom Yum','rate':4.13,'rarity':'r','type':'def','portrait':'img/tom.jpg'},
{'name':'Taiyaki','rate':4.13,'rarity':'r','type':'atk','portrait':'img/taiyaki.jpg'},{'name':'Dorayaki','rate':4.13,'rarity':'r','type':'mag','portrait':'img/dora.jpg'},{'name':'Milk','rate':4.13,'rarity':'r','type':'sup','portrait':'img/milk.jpg'},{'name':'Sake','rate':4.13,'rarity':'r','type':'mag','portrait':'img/sake.jpg'}, 
{'name':'Tempura','rate':4.13,'rarity':'r','type':'def','portrait':'img/tempu.jpg'}, {'name':'Spicy Gluten','rate':4.13,'rarity':'r','type':'atk','portrait':'img/sg.jpg'}, {'name':'Jiuniang','rate':4.14,'rarity':'r','type':'mag','portrait':'img/jiun.jpg'}, {'name':'Omurice','rate':4.14,'rarity':'r','type':'atk','portrait':'img/omu.jpg'},
{'name':'Orange Juice','rate':4.14,'rarity':'r','type':'mag','portrait':'img/oj.jpg'},{'name':'Ume Ochazuke','rate':4.14,'rarity':'r','type':'mag','portrait':'img/ume.jpg'},{'name':'Miso Soup','rate':4.14,'rarity':'r','type':'sup','portrait':'img/miso.jpg'},{'name':'Yellow Wine','rate':4.14,'rarity':'r','type':'atk','portrait':'img/yw.jpg'},
{'name':'Skewer','rate':0.46,'rarity':'m','type':'atk','portrait':'img/skewer.jpg'},{'name':'Jello','rate':0.46,'rarity':'m','type':'sup','portrait':'img/jel.jpg'},{'name':'Pancake','rate':0.46,'rarity':'m','type':'atk','portrait':'img/pan.jpg'},{'name':'Popcorn','rate':0.47,'rarity':'m','type':'mag','portrait':'img/pop.jpg'}];

var clicks=0;

function gacha() {
    var total_weight=100;
    var random_nr=Math.floor(Math.random() * (total_weight));

    for (var i=0; i<characters.length; i++) {
        var item=characters[i];
        if(random_nr < item['rate']) {
            return item;
        }
        random_nr=random_nr-item['rate'];
    }
}

function summon(nr_summons){
    var tableRef = document.getElementById('summon-table').getElementsByTagName('tbody')[0];

    for(var i=0; i<nr_summons; i++){
        var hero=gacha();

        var newRow   = tableRef.insertRow(0);

        var cell0  = newRow.insertCell(0);
        var cell1  = newRow.insertCell(1);
        var cell2  = newRow.insertCell(2);
        var cell3  = newRow.insertCell(3);
        
        var img = document.createElement("img");
        img.src = "./"+hero['portrait'];
        cell0.appendChild(img);

        var name  = document.createTextNode(hero['name']);
        cell1.appendChild(name);
    
        var rar = document.createElement("img");
        rar.src = "./img/"+hero['rarity']+".png";
        //var rar  = document.createTextNode(hero['rarity']);
        cell2.appendChild(rar);

        var ty = document.createElement("img");
        ty.src = "./img/"+hero['type']+".png";
        //var ty  = document.createTextNode(hero['type']);
        cell3.appendChild(ty);
    }
    clicks += nr_summons;
    document.getElementById("soule").innerHTML = clicks*150;
    document.getElementById("gem").innerHTML = clicks*100;
}

function reset() {
    window.location.reload();
} 


function displayRates() {
    var e = "<hr/>";   
    
    for (var i=0; i<characters.length; i++) {
        e += characters[i]['name'] +" "+ characters[i]['rate'] + "<br/>";
    }
    document.getElementsByTagName('body')[0].innerHTML = e;
} 
