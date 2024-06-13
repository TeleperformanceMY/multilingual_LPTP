document.addEventListener('DOMContentLoaded', () => {
    const languages = {
        en: {
            title: "On The Hunt For THE ONE!",
            ad: "Are You The One ?!",
            join: "Expect our response in 24 hours, no ifs, ands, or buts!",
            videoSrc: "WhatsApp31.mp4",
            background: "depositphoto-modified.jpg",
            moreJobs: "generate QR and Link to Apply With US !!"
        },
        zh: {
            title: "寻找TA！",
            ad: "你是TA吗？！",
            join: "期待我们在24小时内回复，不折不扣！",
            videoSrc: "path/to/video-zh.mp4",
            background: "jp1.jpg",
            moreJobs: "generate QR and Link to Apply With US !!"
        },
        jp: {
            title: "THE ONEを探しています！",
            ad: "あなたはTHE ONEですか？！",
            join: "24時間以内の回答を期待してください、何の条件もありません！",
            videoSrc: "JPVID (1) (1).mp4",
            background: "jp2.jpg",
            moreJobs: "generate QR and Link to Apply With US !!"
        }
    };

    const languageDropdown = document.getElementById('languages');
    const title = document.querySelector('.title');
    const adSticker = document.querySelector('.ad-sticker p');
    const footerText = document.querySelector('footer p');
    const video = document.querySelector('.video-container video');
    const main = document.querySelector('main');
    const moreJobsButton = document.getElementById('show-more');
    const moreOptions = document.getElementById('more-options');

    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const sourceParam = urlParams.get('utm_source') || 'default_source';
    const mediumParam = urlParams.get('utm_medium') || 'default_medium';
    const campaignParam = urlParams.get('utm_campaign') || 'default_campaign';

    if (langParam && languages[langParam]) {
        languageDropdown.value = langParam;
        updateContent(langParam);
    }

    languageDropdown.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateContent(selectedLanguage);
        updateURLParameter('lang', selectedLanguage);
    });

    function updateContent(language) {
        const langContent = languages[language];
        title.textContent = langContent.title;
        adSticker.textContent = langContent.ad;
        footerText.textContent = langContent.join;
        video.src = langContent.videoSrc;
        main.style.backgroundImage = `url('${langContent.background}')`;
        moreJobsButton.textContent = langContent.moreJobs;

        video.autoplay = true;
        video.muted = false;

        updateLinks();
    }

    function updateURLParameter(param, value) {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set(param, value);
        window.history.replaceState(null, '', currentUrl);
    }

    function updateLinks() {
        const links = document.querySelectorAll('footer a, footer button[value]');
        links.forEach(link => {
            let url = link.href || link.value;
            url = new URL(url);
            url.searchParams.set('utm_source', sourceParam);
            url.searchParams.set('utm_medium', mediumParam);
            url.searchParams.set('utm_campaign', campaignParam);
            link.href = url.toString();
            link.value = url.toString();
        });
    }

    function openQrModal(url) {
        const modal = document.getElementById('qr-modal');
        const span = document.getElementsByClassName('close')[0];
        const qrCanvas = document.getElementById('qr-code');
        const jobUrl = document.getElementById('job-url');

        jobUrl.href = url;
        jobUrl.textContent = url;

        new QRious({
            element: qrCanvas,
            value: url,
            size: 200,
        });

        modal.style.display = "block";

        span.onclick = () => {
            modal.style.display = "none";
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    moreJobsButton.addEventListener('click', () => {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        const selectedJob = jobSelect.value;

        const jobData = jsonData.find(item => item.Language === selectedLanguage && item.Location === selectedLocation && item.Positions === selectedJob);

        if (jobData) {
            const finalLink = jobData["Evergreen link"];
            openQrModal(finalLink);
        } else {
            alert('Evergreen link not found for the selected job.');
        }
    });

    updateLinks();
});

let jsonData = [];

const languageSelect = document.getElementById('language-select');
const locationSelect = document.getElementById('location-select');
const jobSelect = document.getElementById('job-type-select');

// Fetch JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        populatePreferredLanguages(jsonData);
    })
    .catch(error => console.error('Error loading JSON data:', error));

function populatePreferredLanguages(data) {
    const languages = [...new Set(data.map(item => item.Language))];
    populateDropdown(languageSelect, languages);
}

function populateDropdown(selectElement, options) {
    selectElement.innerHTML = '';
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    const locations = [...new Set(jsonData.filter(item => item.Language === selectedLanguage).map(item => item.Location))];
    populateDropdown(locationSelect, locations);
    populateDropdown(jobSelect, []); // Reset job dropdown
});

locationSelect.addEventListener('change', function() {
    const selectedLanguage = languageSelect.value;
    const selectedLocation = this.value;
    const jobs = jsonData.filter(item => item.Language === selectedLanguage && item.Location === selectedLocation).map(item => item.Positions);
    populateDropdown(jobSelect, jobs);
});

// Event listeners for share buttons
document.getElementById("share-button-whatsapp").addEventListener("click", function() {
    const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
    const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message + "\n\n" + document.getElementById('job-url').href + "\n\n" + message2)}`;
    window.open(whatsappLink, "_blank");
});

document.getElementById("share-button-line").addEventListener("click", function() {
    const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
    const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
    const lineLink = `https://line.me/R/msg/text/?${encodeURIComponent(message + "\n\n" + document.getElementById('job-url').href + "\n\n" + message2)}`;
    window.open(lineLink, "_blank");
});

document.getElementById("share-button-facebook").addEventListener("click", function() {
    const facebookMessage = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
    const facebookMessage2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
    const facebookCaption = encodeURIComponent(facebookMessage + "\n\n" + document.getElementById('job-url').href + "\n\n" + facebookMessage2);
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.getElementById('job-url').href)}&quote=${facebookCaption}`;
    window.open(facebookLink, "_blank", "width=600,height=400");
});

document.getElementById("share-button-IG").addEventListener("click", function() {
    const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
    const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
    const instagramCaption = encodeURIComponent(message + "\n\n" + document.getElementById('job-url').href + "\n\n" + message2);
    
    // Open Instagram app if available, otherwise open Instagram website
    const instagramAppLink = `instagram://library?Caption=${instagramCaption}`;
    const instagramWebLink = `https://www.instagram.com/stories/myday?utm_source=ig_story_share&igshid=YOUR_IG_USER_ID`;

    // Try opening Instagram app, if it fails, open Instagram website
    window.open(instagramAppLink, "_blank", "width=600,height=400") || window.open(instagramWebLink, "_blank");
});

document.getElementById("share-button-TikTok").addEventListener("click", function() {
    const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
    const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
    const tiktokCaption = encodeURIComponent(message + "\n\n" + document.getElementById('job-url').href + "\n\n" + message2);
    
    // Open TikTok app if available, otherwise open TikTok website
    const tiktokAppLink = `tiktok://share?text=${tiktokCaption}`;
    const tiktokWebLink = `https://www.tiktok.com/share?url=YOUR_VIDEO_URL`;

    // Try opening TikTok app, if it fails, open TikTok website
    window.open(tiktokAppLink, "_blank") || window.open(tiktokWebLink, "_blank");
});
document.addEventListener('DOMContentLoaded', function() {
    const sticker = document.querySelector('.header-sticker');
    const footer = document.querySelector('footer');

    sticker.addEventListener('click', function() {
        footer.scrollIntoView({ behavior: 'smooth' });
    });
});
