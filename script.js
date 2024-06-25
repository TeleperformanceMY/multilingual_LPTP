document.addEventListener('DOMContentLoaded', () => {
    const languages = {
        en: {
            title: "On The Hunt For THE ONE!",
            ad: "Are You The One ?!",
            join: "Expect our response in 24 hours, no ifs, ands, or buts!",
            videoSrc: "WhatsApp31.mp4",
            background: "depositphoto-modified.jpg",
            moreJobs: "Generate QR and Link to Apply With US !!"
        },
        zh: {
            title: "寻找TA！",
            ad: "你是TA吗？！",
            join: "期待我们在24小时内回复，不折不扣！",
            videoSrc: "path/to/video-zh.mp4",
            background: "jp1.jpg",
            moreJobs: "Generate QR and Link to Apply With US !!"
        },
        jp: {
            title: "THE ONEを探しています！",
            ad: "あなたはTHE ONEですか？！",
            join: "24時間以内の回答を期待してください、何の条件もありません！",
            videoSrc: "JPVID (1) (1).mp4",
            background: "jp2.jpg",
            moreJobs: "Generate QR and Link to Apply With US !!"
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
    const sourceParam = urlParams.get('utm_source');
    const mediumParam = urlParams.get('utm_medium');
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
            const utmSource = url.searchParams.get('utm_source');
            const utmMedium = url.searchParams.get('utm_medium');
            const utmCampaign = url.searchParams.get('utm_campaign');

            if (utmSource && utmMedium && utmCampaign) {
                url = generateFinalURL(url.toString(), utmSource, utmMedium);
                link.href = url.toString();
                link.value = url.toString();
            }
        });
    }

    function generateFinalURL(baseURL, source, medium) {
        let finalURL = new URL(baseURL);
        let iisValue, iisnValue;

        switch (medium) {
            case 'social':
                iisValue = "Social Media";
                iisnValue = `${encodeURIComponent(source).replace(/%2B/g, '+')}+Ads`;
                break;
            case 'mobile':
                iisValue = "Mobile Stand";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'banner1':
                iisValue = "banner1";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'banner2':
                iisValue = "banner2";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
                               case 'falyer':
                    iisValue = "falyer";
                    iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                    break;
            default:
                console.error("Unknown utm_medium");
                return baseURL;
        }

        finalURL.searchParams.set('mode', 'job');
        finalURL.searchParams.set('iis', encodeURIComponent(iisValue).replace(/%20/g, '+'));
        finalURL.searchParams.set('iisn', encodeURIComponent(iisnValue).replace(/%2B/g, '+'));

        return decodeURIComponent(finalURL.toString());
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
        const selectedLanguage = document.getElementById('language-select').value;
        const selectedLocation = document.getElementById('location-select').value;
        const selectedJob = document.getElementById('job-type-select').value;

        const jobData = jsonData.find(item => item.Language === selectedLanguage && item.Location === selectedLocation && item.Positions === selectedJob);

        if (jobData) {
            const finalLink = generateFinalURL(jobData["Evergreen link"], sourceParam, mediumParam);
            openQrModal(finalLink);
        } else {
            alert('Evergreen link not found for the selected job.');
        }
    });

    updateLinks();
});

let jsonData = [];
document.addEventListener('DOMContentLoaded', () => {
    const languageDropdown = document.getElementById('language-select');
    const locationDropdown = document.getElementById('location-select');
    const jobDropdown = document.getElementById('job-type-select');

    // Fetch JSON data and populate dropdowns
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            populateDropdown(languageDropdown, ['Select your language', ...getUniqueValues(data, 'Language')]);
            populateDropdown(locationDropdown, ['Choose your location']);
            populateDropdown(jobDropdown, ['Choose your job']);
            jsonData = data;
        })
        .catch(error => console.error('Error loading JSON data:', error));

    // Event listeners for dropdown changes
    languageDropdown.addEventListener('change', handleLanguageChange);
    locationDropdown.addEventListener('change', handleLocationChange);

    function handleLanguageChange() {
        const selectedLanguage = languageDropdown.value;
        const locations = getUniqueValues(jsonData.filter(item => item.Language === selectedLanguage), 'Location');
        populateDropdown(locationDropdown, ['Choose your location', ...locations]);
        populateDropdown(jobDropdown, ['Choose your job']);
    }

    function handleLocationChange() {
        const selectedLanguage = languageDropdown.value;
        const selectedLocation = locationDropdown.value;
        const jobs = getUniqueValues(jsonData.filter(item => item.Language === selectedLanguage && item.Location === selectedLocation), 'Positions');
        populateDropdown(jobDropdown, ['Choose your job', ...jobs]);
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

    function getUniqueValues(data, key) {
        return [...new Set(data.map(item => item[key]))];
    }
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
    const instagramLink = `https://www.instagram.com/?url=${encodeURIComponent(document.getElementById('job-url').href + "\n\n" + message + "\n\n" + message2)}`;
    window.open(instagramLink, "_blank");
});
