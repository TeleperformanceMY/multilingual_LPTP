document.addEventListener('DOMContentLoaded', () => {
    const languages = {
        en: {
            title: "On The Hunt For THE ONE!",
            ad: "Are You The One ?!",
            join: "Expect our response in 24 hours, no ifs, ands, or buts!",
            videoSrc: "WhatsApp31.mp4",
            background: "depositphoto-modified.jpg",
            moreJobs: "More Jobs" // Added translation for the button
        },
        zh: {
            title: "寻找TA！",
            ad: "你是TA吗？！",
            join: "期待我们在24小时内回复，不折不扣！",
            videoSrc: "path/to/video-zh.mp4",
            background: "jp1.jpg",
            moreJobs: "更多工作" // Translation for the button
        },
        jp: {
            title: "THE ONEを探しています！",
            ad: "あなたはTHE ONEですか？！",
            join: "24時間以内の回答を期待してください、何の条件もありません！",
            videoSrc: "JPVID (1) (1).mp4",
            background: "jp2.jpg",
            moreJobs: "さらに求人" // Translation for the button
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

    languageDropdown.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const langContent = languages[selectedLanguage];
        title.textContent = langContent.title;
        adSticker.textContent = langContent.ad;
        footerText.textContent = langContent.join;
        video.src = langContent.videoSrc; // Changed to update video source directly
        main.style.backgroundImage = `url('${langContent.background}')`;

        // Update the button text
        moreJobsButton.textContent = langContent.moreJobs;

        // Autoplay video with sound
        video.autoplay = true;
        video.muted = false;
    });

    moreJobsButton.addEventListener('click', () => {
        moreOptions.classList.toggle('show');
    });
});
