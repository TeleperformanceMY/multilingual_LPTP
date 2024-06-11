document.addEventListener('DOMContentLoaded', () => {
    const languages = {
        en: {
            title: "On The Hunt For THE ONE!",
            ad: "Are You The One ?!",
            join: "Expect our response in 24 hours, no ifs, ands, or buts!",
            videoSrc: "WhatsApp31.mp4",
            background: "depositphoto-modified.jpg",
            moreJobs: "More Jobs"
        },
        zh: {
            title: "寻找TA！",
            ad: "你是TA吗？！",
            join: "期待我们在24小时内回复，不折不扣！",
            videoSrc: "path/to/video-zh.mp4",
            background: "jp1.jpg",
            moreJobs: "更多工作"
        },
        jp: {
            title: "THE ONEを探しています！",
            ad: "あなたはTHE ONEですか？！",
            join: "24時間以内の回答を期待してください、何の条件もありません！",
            videoSrc: "JPVID (1) (1).mp4",
            background: "jp2.jpg",
            moreJobs: "さらに求人"
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
        video.src = langContent.videoSrc; // Changed to update video source directly
        main.style.backgroundImage = `url('${langContent.background}')`;
        moreJobsButton.textContent = langContent.moreJobs;

        // Autoplay video with sound
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

    moreJobsButton.addEventListener('click', () => {
        moreOptions.classList.toggle('show');
    });

    updateLinks();
});
