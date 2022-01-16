async function getData(url){
    try{
    let api = await fetch(url);
    let res = await api.json();
    let videos = res.items;
    return videos;
    }
    catch(err){
        console.log(err);
    }
}

let appendData = (data,location) =>{
    location.innerHTML = "";
    data.forEach(({snippet, id:{videoId},snippet:title}) =>{
        // let {id:{videoId}} = elem;
        console.log(snippet);
        let div = document.createElement("div");
        let imgdiv = document.createElement("div");
        let title1 = document.createElement("p");
        title1.textContent = snippet.title;
        let thumbnail = document.createElement("img");
        thumbnail.src = snippet.thumbnails.medium.url;
        let datatosend = {
            snippet,
            videoId,
        }
        imgdiv.append(thumbnail);
        div.append(imgdiv,title1);
        div.onclick = () =>{
            showVideo(datatosend);
        }
        location.append(div);
        // document.querySelector("#search_results").append(div);
    })
}

    let showVideo = (a) =>{
        localStorage.setItem("a", JSON.stringify(a));
        window.location.href = "video.html";
    }
    function logstatus(){
        let logstatus = JSON.parse(localStorage.getItem("logstatus"));
        if(logstatus.login === true){
            let initial = logstatus.username[0];
            document.getElementById("logup").innerText = initial;
            document.getElementById("logup").style.borderRadius = "30px";
            document.getElementById("logup").style.padding = "10px 20px"
            document.getElementById("logup").style.fontSize = "xx-large";
            document.getElementById("logup").style.backgroundColor = "skyblue"
            document.getElementById("logup").href = "../profile.html"
            document.getElementById("signup").textContent = "Log out";
            document.getElementById("signup").href = "login.html";
            
        }
    }

export {getData, appendData, logstatus}