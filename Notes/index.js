document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.createElement("div");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "5px";
    progressBar.style.backgroundColor = "#007bff";
    progressBar.style.width = "0%";
    progressBar.style.zIndex = "1000";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrolledPercentage + "%";

        const remainingPercentage = 100 - scrolledPercentage;
        document.getElementById("progress-text").textContent = `Remaining: ${remainingPercentage.toFixed(2)}%`;
    });

    const progressText = document.createElement("div");
    progressText.id = "progress-text";
    progressText.style.position = "fixed";
    progressText.style.bottom = "10px";
    progressText.style.right = "10px";
    progressText.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    progressText.style.color = "white";
    progressText.style.padding = "5px 10px";
    progressText.style.borderRadius = "5px";
    progressText.style.fontSize = "14px";
    document.body.appendChild(progressText);
});
