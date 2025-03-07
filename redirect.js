
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const rollno = document.getElementById("rollno").value.trim();
        const branch = document.getElementById("branch").value.toLowerCase();
        const year = document.getElementById("year").value.trim();

        if (!rollno || !year) {
            alert("Please enter all details.");
            return;
        }

        let targetFolder = "";
        switch (branch) {
            case "cse":
                targetFolder = "cse";
                break;
            case "ece":
                targetFolder = "ece";
                break;
            case "eee":
                targetFolder = "eee";
                break;
            case "mech":
                targetFolder = "mech";
                break;
            case "mca":
                targetFolder = "mca";
                break;
            default:
                console.log(branch);
                alert(`Invalid Branch Selected ${branch}`);
                return;
        }

        window.location.href = `results/${targetFolder}/results.html?rollno=${rollno}&year=${year}`;
        console.log("Hello")
    });
});

function clearLocal() {
    localStorage.clear();
    alert("Local storgae is cleared ")
}