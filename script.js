document.addEventListener('DOMContentLoaded', () => {
    const languages = {
        en: {
            about_us: "About Us",
            careers: "Careers",
            hot_job: "Hot Job 🔥",
            opportunities: "Job Opportunities 🌟",
            refer_friend: "Refer A Friend",
            stay_connected: "Stay Connected",
            contact_us: "Contact Us",
            language: 'Language',
            hot_job_content: "Hot Job Of The Week!",
            hot_job_description: "Check out our <strong>“Hot Job of the Week”</strong> and join our award-winning team! This role offers fantastic growth opportunities, competitive benefits, and the chance to work with cutting-edge AI technology. Apply now and be part of our journey to excellence!",
            apply_now: "Apply Now!",
            find_job: "Find your perfect job!",
            choose_language: "Choose your language",
            choose_location: "Choose your location",
            choose_job_type: "Choose your job type",
            generate_qr: "Generate QR Code & Apply Now!",
            intro_text: "We are on the hunt for the <span class='highlight'>One</span>",
            team_response: "Our team will respond within <span class='highlighted-word'>48 hours!</span>",
            intro_text1: "Find your perfect <span class='highlight'>Job!</span>",
            intro_text2: "Our team will respond within <span class='highlighted-word'>48 hours!</span>",
            share_via: "Share via",
            preferred_language: "Preferred Language",
        },
        zh: {
            about_us: "关于我们",
            careers: "职业机会",
            hot_job: "热门职位 🔥",
            opportunities: "机会 🌟",
            refer_friend: "介绍个朋友",
            stay_connected: "保持联系",
            contact_us: "联系我们",
            language: '语言',
            hot_job_content: "本周热门职位!",
            hot_job_description: "查看我们的<strong>“本周热门职位”</strong>，加入我们屡获殊荣的团队吧！这个职位提供了绝佳的成长机会、具有竞争力的福利待遇，以及与尖端AI技术合作的机会。立即申请，成为我们追求卓越之旅的一部分！",
            apply_now: "立即申请！",
            find_job: "找到你的理想工作！",
            choose_language: "首选语言",
            choose_location: "选择您的位置",
            choose_job_type: "选择您的工作类型",
            generate_qr: "生成二维码并立即申请！",
            intro_text: "我们正在寻找那个<span class='highlight'>合适的人</span>",
            team_response: "我们的团队将在<span class='highlighted-word'> 48 小时</span>内回复！",
            intro_text1: "找到你的完美 <span class='highlight'>工作！</span>",
            intro_text2: "我们的团队将在<span class='highlighted-word'> 48 小时</span>内回复！",
            share_via: "分享",
            preferred_language: "首选语言",
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            hot_job: "ホットジョブ 🔥",
            opportunities: "採用情報 🌟",
            refer_friend: "友達紹介",
            stay_connected: "つながりを続ける",
            contact_us: "お問い合わせ",
            language: '言語',
            hot_job_content: "今週の注目のお仕事!",
            hot_job_description: "当社の<strong>「今週の注目のお仕事」</strong>をチェックして、受賞歴のあるチームに参加しませんか！この職務は、素晴らしい成長の機会、競争力のある福利厚生、そして最先端のAI テクノロジーを活用する機会を提供します。今すぐ応募して、私たちの卓越性への旅の一員になりませんか！",
            apply_now: "今すぐ応募!",
            find_job: "理想の仕事を見つける!",
            choose_language: "勤務地を選択",
            choose_location: "あなたの場所を選択してください",
            choose_job_type: "職種を選ぶ",
            generate_qr: "QRコードを作成し、今すぐご応募ください！",
            intro_text: "私たちは<span class='highlight'>誰か</span>を探しています",
            team_response: "<span class='highlighted-word'>48時間</span>以内に返信いたします！",
            intro_text1: "理想の<span class='highlight'>お仕事</span>を見つけましょう！",
            intro_text2: "<span class='highlighted-word'>48時間</span>以内に返信いたします！",
            share_via: "共有",
            preferred_language: "首選言語",
        }
    };

    const elementsToTranslate = {
        '.intro-text h1': 'intro_text',
        '.hot-job p': 'hot_job_description',
        '.find-job p': 'team_response',
        '.generate-btn': 'generate_qr',
        '.language-dropdown > a': 'choose_language',
        '.find-job h2': 'find_job',
        '.intro-text1 h1': 'intro_text1',
        '.intro-text1 h2': 'intro_text2',
        'header ul li:nth-child(1) > a': 'about_us',
        'header ul li:nth-child(1) ul li:nth-child(1) > a': 'tp_malaysia',
        'header ul li:nth-child(1) ul li:nth-child(2) > a': 'tp_thailand',
        '.careers': 'careers',
        'header ul li:nth-child(2) ul li:nth-child(1) > a': 'hot_job',
        'header ul li:nth-child(2) ul li:nth-child(2) > a': 'opportunities',
        'header ul li:nth-child(2) ul li:nth-child(3) > a': 'refer_friend',
        '.Stay': 'stay_connected',
        'header ul li:nth-child(3) ul li:nth-child(1) > a': 'tpmy_instagram',
        'header ul li:nth-child(3) ul li:nth-child(2) > a': 'tpth_instagram',
        'header ul li:nth-child(3) ul li:nth-child(3) > a': 'tpmy_facebook',
        'header ul li:nth-child(3) ul li:nth-child(4) > a': 'tpth_facebook',
        '.contact-us': 'contact_us',
        '.language-dropdown > a': 'language',
        '.language-dropdown ul li:nth-child(1) > a': 'english',
        '.language-dropdown ul li:nth-child(2) > a': 'mandarin',
        '.language-dropdown ul li:nth-child(3) > a': 'japanese',
        '.share-buttons h2': 'share_via',
        '.hot-job h2': 'hot_job_content',
        '.apply-btn': 'apply_now',
        '.container h1': 'intro_text2',
        '.lang label': 'preferred_language',
        '.loc label': 'choose_location',
        '.jobt label': 'choose_job_type',
        '.RAF': 'refer_friend'
    };

    const dropdown = document.querySelector('.language-dropdown');
    const selectDropdown = document.getElementById('languages');
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobTypeSelect = document.getElementById('job-type-select');
    const urlParams = new URLSearchParams(window.location.search);

    function updateContent(language) {
        const langContent = languages[language];
        if (langContent) {
            Object.keys(elementsToTranslate).forEach(selector => {
                const key = elementsToTranslate[selector];
                const element = document.querySelector(selector);
                if (element && langContent[key]) {
                    element.innerHTML = langContent[key];
                }
            });

            languageSelect.querySelector('option[disabled]').textContent = langContent.choose_language;
            locationSelect.querySelector('option[disabled]').textContent = langContent.choose_location;
            jobTypeSelect.querySelector('option[disabled]').textContent = langContent.choose_job_type;
        }
    }

    function updateURLParameter(param, value) {
        urlParams.set(param, value);
        const newURL = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.replaceState(null, '', newURL);
    }

    dropdown.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.tagName === 'A') {
            const selectedLanguage = event.target.dataset.lang;
            updateContent(selectedLanguage);
            updateURLParameter('lang', selectedLanguage);
        }
    });

    selectDropdown.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        updateContent(selectedLanguage);
        updateURLParameter('lang', selectedLanguage);
    });

    const selectedLanguage = urlParams.get('lang') || 'en';
    updateContent(selectedLanguage);
    selectDropdown.value = selectedLanguage;

    function populateDropdowns() {
        const locations = ['Location 1', 'Location 2', 'Location 3'];
        const jobTypes = ['Job Type 1', 'Job Type 2', 'Job Type 3'];

        locations.forEach(location => {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        });

        jobTypes.forEach(jobType => {
            const option = document.createElement('option');
            option.value = jobType;
            option.textContent = jobType;
            jobTypeSelect.appendChild(option);
        });
    }

    populateDropdowns();
});




//Generating Final URL with UTM Parameters
// Function to generate final URL with UTM parameters
function generateFinalURL(baseURL, source, medium) {
    let finalURL = new URL(baseURL);
    let iisValue, iisnValue;

    switch (medium) {
        case 'social':
            iisValue = "Social Media";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'career':
            iisValue = "Career Fair";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'digital':
            iisValue = "Digital Ad";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'mobile':
            iisValue = "Mobile Stand";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'poster':
            iisValue = "Poster";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'email':
            iisValue = "Email Blast";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'physical':
            iisValue = "Physical QR";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'banner1':
            iisValue = "Banner 1";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'banner2':
            iisValue = "Banner 2";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        case 'fotg':
            iisValue = "FoTG";
            iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
            break;
        default:
            console.error("Unknown medium");
            return baseURL; // Return base URL if medium is not recognized
    }
  // Replace "utm_source=" and "utm_medium=" in source and medium
  source = source.replace('utm_source=', '');
  medium = medium.replace('utm_medium=', '');
    finalURL.searchParams.set('mode', 'job');
    finalURL.searchParams.set('iis', encodeURIComponent(iisValue).replace(/%20/g, '+'));
    finalURL.searchParams.set('iisn', encodeURIComponent(iisnValue).replace(/%2B/g, '+'));

    return decodeURIComponent(finalURL.toString());
}


//Handling Click Event on Generate Button


// Function to open QR modal and display QR code and job URL
function openQrModal(url) {
    const modal = document.getElementById('qr-modal');
    const span = document.querySelector('.close');
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
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const selectedLanguage = document.getElementById('language-select').value;
            const selectedLocation = document.getElementById('location-select').value;
            const selectedJob = document.getElementById('job-type-select').value;

            // Check if options are selected
            if (!selectedLanguage || !selectedLocation || !selectedJob) {
                alert('Please select all options.');
                return;
            }

            // Ensure jsonData is available
            if (!jsonData) {
                alert('Failed to fetch job data. Please try again later.');
                return;
            }

            const jobData = jsonData.find(item => item.Language === selectedLanguage && item.Location === selectedLocation && item.Positions === selectedJob);

            if (jobData) {
                // Get utm_source and utm_medium from current URL
                const urlParams = new URLSearchParams(window.location.search);
                const sourceParam = urlParams.get('utm_source') || '';
                const mediumParam = urlParams.get('utm_medium') || '';

                const finalLink = generateFinalURL(jobData["Evergreen link"], sourceParam, mediumParam);
                openQrModal(finalLink);
            } else {
                alert('Evergreen link not found for the selected job.');
            }
        });
    } else {
        console.error('#generate-btn button not found.');
    }

    // Fetch JSON data (assuming this part remains unchanged)
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch job data.');
            }
            return response.json();
        })
        .then(data => {
            jsonData = data; // Assign fetched data to jsonData
        })
        .catch(error => {
            console.error('Error fetching job data:', error);
            alert('Failed to fetch job data. Please try again later.');
        });
});




document.addEventListener('DOMContentLoaded', () => {

    // Function to open QR modal
    function openQrModal(url) {
        const modal = document.getElementById('qr-modal');
        const span = document.querySelector('.close');
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
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});

//Fetching JSON Data and Populating Dropdowns
document.addEventListener('DOMContentLoaded', () => {
    let jsonData = [];
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

//Handling Click Event on Apply Button

document.addEventListener('DOMContentLoaded', () => {
    const customLink = document.getElementById('apply-btn');

    if (customLink) {
        customLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default action of the link

            const originalUrl = customLink.getAttribute('href');
            const currentUrl = window.location.href;
            const url = new URL(currentUrl);
            const utmSource = url.searchParams.get('utm_source');
            const utmMedium = url.searchParams.get('utm_medium');

            if (utmSource && utmMedium) {
                const finalUrl = generateFinalURL(originalUrl, utmSource, utmMedium);
                customLink.setAttribute('href', finalUrl); // Update the href attribute
                window.open(finalUrl, '_blank'); // Open the modified URL in a new tab
            } else {
                console.error("Missing utm_source or utm_medium parameters in the current URL");
            }
        });
    } else {
        console.error("#apply-btn button not found.");
    }
    function updateURLWithUTMParams(url, source, medium) {
        const finalURL = new URL(url);
        finalURL.searchParams.set('utm_source', encodeURIComponent(source));
        finalURL.searchParams.set('utm_medium', encodeURIComponent(medium));
        finalURL.searchParams.set('utm_campaign', 'your_campaign_value');
        return finalURL.toString();
    }
    function generateFinalURL(baseURL, source, medium) {
        let finalURL = new URL(baseURL);
        let iisValue, iisnValue;

        switch (medium) {
            case 'social':
                iisValue = "Social Media";
                iisnValue = `${encodeURIComponent(source).replace(/%2B/g, '+')}+Ads`;
                break;
           case 'Career':
                iisValue = "Career fair";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Digital':
                iisValue = "Digital Ad";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'mobile':
                iisValue = "mobile stand";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Career':
                iisValue = "Career Fair";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Mobile':
                 iisValue = "Mobile Stand";
                 iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                    break;
            case 'Poster':
                iisValue = "Poster";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                 break;
                    case 'Social':
                iisValue = "Social Media";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Flyers':
                iisValue = "Flyers";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Physical':
                iisValue = "Physical QR";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'FoTG':
                iisValue = "FoTG";
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
                    case 'Email':
                                iisValue = "Email Blast";
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
});

//Handling Click Events for Share Buttons

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
 
$(document).ready(function() {
    $('.mobile-menu-toggle').click(function() {
        $('.mobile-menu').slideToggle();
    });
});
