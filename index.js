
    const all = "https://kontests.net/api/v1/all";
    const codeforces = "https://kontests.net/api/v1/codeforces";
    const topcoder = "https://kontests.net/api/v1/top_coder";
    const codechef = "https://kontests.net/api/v1/code_chef";
    const atcoder = "https://kontests.net/api/v1/at_coder";
    const kickstart = "https://kontests.net/api/v1/kick_start";
    const leetcode = "https://kontests.net/api/v1/leet_code";
    const cs_academy = "https://kontests.net/api/v1/cs_academy";
    const hackerrank = "https://kontests.net/api/v1/hacker_rank";

    window.onload = load;

    function formatTime(input){
        return new Date(input).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })
    }

    function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}




function load()
{
        //     fetch(all).then((response) => response.json()).then(data => {
        //         console.log(data);
        //         data.forEach((item) =>
        //         document.querySelector("table").innerHTML += `
        //         <tr>
        //             // <td><img src="./code-forces.svg"></img></td>
        //             <td>${item.name}</td>
        //             <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]}</td>
        //             <td><br>${formatTime(item.end_time).split(",")[0]}  <br> ${formatTime(item.end_time).split(",")[1]} </td>
        //             <td>${convertHMS(item.duration)}</td>
        //             <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
        //             </tr>
        //             `
        //             )
        //     })


        fetch(codeforces).then((response) => response.json()).then(data => {
            console.log(data);
            data.forEach((item) =>
            document.querySelector("table").innerHTML += `
            <tr>
                <td><img src="./images/code-forces.svg"></img></td>
                <td>${item.name}</td>
                <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]}</td>
                <td><br>${formatTime(item.end_time).split(",")[0]}  <br> ${formatTime(item.end_time).split(",")[1]} </td>
                <td>${convertHMS(item.duration)}</td>
                <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
                </tr>
                `
                )
            })


            // fetch(topcoder).then((response) => response.json()).then(data => {
                //     console.log(data);
                //     data.forEach((item) =>
                //     document.querySelector("table").innerHTML += `
                //     <tr>
                //         // <td><img src="./code-forces.svg"></img></td>
                //         <td>${item.name}</td>
                //         <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]}</td>
                //         <td><br>${formatTime(item.end_time).split(",")[0]}  <br> ${formatTime(item.end_time).split(",")[1]} </td>
        //         <td>${convertHMS(item.duration)}</td>
        //         <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
        //         </tr>
        //         `
        //         )
        // })
        
        
        // fetch(codechef).then((response) => response.json()).then(data => {
        //         console.log(data);
        //         data.forEach((item) =>
        //             document.querySelector("table").innerHTML += `
        //             <tr>
        //             <td><img src="./codechef.svg"></img></td>
        //             <td>${item.name}</td>
        //             <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]}</td>
        //             <td><br>${formatTime(item.end_time).split(",")[0]}  <br> ${formatTime(item.end_time).split(",")[1]} </td>
        //             <td>${convertHMS(item.duration)}</td>
        //             <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
        //         </tr>
        //         `
        //     )
        // })

        

        
        fetch(leetcode).then((response) => response.json()).then(data => {
            console.log(data);
            data.forEach((item) =>
            document.querySelector("table").innerHTML += `
            <tr>
                <td><img src="./images/leetcode.svg"></img></td>
                <td>${item.name}</td>
                <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]} </td>
                <td><br>${formatTime(item.end_time).split(",")[0]} <br> ${formatTime(item.end_time).split(",")[1]} </td>
                <td>${convertHMS(item.duration)}</td>
                <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
                </tr>
                `
                )
            })
            
            
            fetch(atcoder).then((response) => response.json()).then(data => {
                    console.log(data);
                    data.forEach((item) =>
                document.querySelector("table").innerHTML += `
                <tr>
                    <td><img src="./images/atcoder.png"></img></td>
                    <td>${item.name}</td>
                    <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]} </td>
                    <td><br>${formatTime(item.end_time).split(",")[0]} <br> ${formatTime(item.end_time).split(",")[1]} </td>
                    <td>${convertHMS(item.duration)}</td>
                    <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
                </tr>
                `
            )
        })

        
        fetch(kickstart).then((response) => response.json()).then(data => {
            console.log(data);
            data.forEach((item) =>
            document.querySelector("table").innerHTML += `
            <tr>
                <td><img src="./images/kickstart.jpg"></img></td>
                <td>${item.name}</td>
                <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]} </td>
                <td><br>${formatTime(item.end_time).split(",")[0]} <br> ${formatTime(item.end_time).split(",")[1]} </td>
                <td>${convertHMS(item.duration)}</td>
                <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
                </tr>
                `
                )
            })


        // fetch(cs_academy).then((response) => response.json()).then(data => {
        //     console.log(data);
        //     data.forEach((item) =>
        //     document.querySelector("table").innerHTML += `
        //     <tr>
        //         // <td><img src="./kickstart.jpg"></img></td>
        //         <td>${item.name}</td>
        //         <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]} </td>
        //         <td><br>${formatTime(item.end_time).split(",")[0]} <br> ${formatTime(item.end_time).split(",")[1]} </td>
        //         <td>${convertHMS(item.duration)}</td>
        //         <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
        //         </tr>
        //         `
        //         )
        //     })


        fetch(hackerrank).then((response) => response.json()).then(data => {
            console.log(data);
            data.forEach((item) =>
            document.querySelector("table").innerHTML += `
            <tr>
                <td><img src="./images/hackerrank.svg"></img></td>
                <td>${item.name}</td>
                <td><br>${formatTime(item.start_time).split(",")[0]} <br>${formatTime(item.start_time).split(",")[1]} </td>
                <td><br>${formatTime(item.end_time).split(",")[0]} <br> ${formatTime(item.end_time).split(",")[1]} </td>
                <td>${convertHMS(item.duration)}</td>
                <td><a href=${item.url} target="_blank" rel="noopener noreferrer"> Click here</a> </td>
                </tr>
                `
                )
            })
    }