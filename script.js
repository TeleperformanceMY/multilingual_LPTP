


// Translation function
function translate(language) {
    const translations = {
        en: {
            about_us: "About Us",
            careers: "Careers",
            stay_connected: "Stay Connected",
            contact_us: "Contact Us",
            language: "Language",
            we_hunt: "We are on the hunt for the One",
            hot_job_week: "Hot Job Of The Week",
            hot_job_description: `Check out our “Hot Job of the Week” and join our award-winning team! This role offers fantastic growth opportunities, competitive benefits, and the chance to work with cutting-edge AI technology. Apply now and be part of our journey to excellence!`,
            apply_now: "Apply Now!",
            find_job: "Find your perfect job!",
            preferred_language: "Preferred language",
            select_language: "Select your language",
            choose_location: "Choose your location",
            choose_job_type: "Choose Your Job Type",
            choose_job: "Choose your job",
            generate_qr: "Generate QR Code & Apply Now!",
            team_response: "Our team will respond within 48 hours!",
            hot_job: "Hot Job",
            opportunities: "Opportunities",
            refer_friend: "Refer A Friend",
            find_perfect_job: "Find your perfect Job!",
            back: "Back",
            share_via: "Share Via",
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            stay_connected: "つながりを続ける",
            contact_us: "お問い合わせ",
            language: "言語",
            we_hunt: "私たち誰 かを探している",
            hot_job_week: "今週の注目のお仕事",
            hot_job_description: `当社の「今週の注目のお仕事」をチェックして、受賞歴のあるチームに参加しませんか！この職務は、素晴らしい成長の機会、競争力のある福利厚生、そして最先端のAI テクノロジーを活用する機会を提供します。今すぐ応募して、私たちの卓越性への旅の一員になりませんか！`,
            apply_now: "今すぐ応募",
            find_job: "理想の仕事を見つける",
            preferred_language: "ご希望の言語",
            select_language: "勤務地を選択",
            choose_location: "勤務地を選択",
            choose_job_type: "職種を選ぶ",
            choose_job: "職種を選択",
            generate_qr: "QRコードを作成し、今すぐご応募ください！",
            team_response: "48時間以内に返信いたします！",
            hot_job: "ホットジョブ",
            opportunities: "採用情報",
            refer_friend: "友達紹介",
            find_perfect_job: "理想のお仕事を見つけましょう！",
            back: "戻る",
            share_via: "共有",
        },
        zh: {
            about_us: "关于我们",
            careers: "职业机会",
            stay_connected: "保持联系",
            contact_us: "联系我们",
            language: "语言",
            we_hunt: "我们正在寻找那个合适的人",
            hot_job_week: "本周热门职位",
            hot_job_description: `查看我们的“本周热门职位”，加入我们屡获殊荣的团队吧！这个职位提供了绝佳的成长机会、具有竞争力的福利待遇，以及与尖端AI技术合作的机会。立即申请，成为我们追求卓越之旅的一部分！`,
            apply_now: "立即申请！",
            find_job: "找到你的理想工作！",
            preferred_language: "首选语言",
            select_language: "选择你的语言",
            choose_location: "选择您的位置",
            choose_job_type: "选择您的工作类型",
            choose_job: "选择你的工作",
            generate_qr: "生成二维码并立即申请！",
            team_response: "我们的团队将在 48 小时内回复！",
            hot_job: "热门职位",
            opportunities: "机会",
            refer_friend: "介绍个朋友",
            find_perfect_job: "找到你的完美工作！",
            back: "后退",
            share_via: "分享",
        },
        kr: {
            about_us: "회사소개 / About TP",
            careers: "인재채용 / 커리어",
            stay_connected: "문의/연락처",
            contact_us: "문의하기",
            language: "언어",
            we_hunt: "함께할 인재를 찾습니다.",
            hot_job_week: "주간 인기 채용공고",
            hot_job_description: `Teleperformance 주간 인기 채용공고를 확인하세요! 최고의 팀에 합류하세요! 커리어 개발 기회, 급여인상, AI 활용 기회를 제공합니다. 지금 지원하고 도전해보세요!`,
            apply_now: "지원하기",
            find_job: "여러분의 최고의 직장을 찾으세요!",
            preferred_language: "선호하는 언어",
            select_language: "언어 선택",
            choose_location: "국가/지역 선택",
            choose_job_type: "Job Type 선택",
            choose_job: "Job 선택",
            generate_qr: "QR코드 생성 및 지원하기",
            team_response: "48시간 내 관련 부서에서 응답할 예정입니다.",
            hot_job: "인기 공고",
            opportunities: "기회 / 채용",
            refer_friend: "지인추천",
            find_perfect_job: "여러분의 최고의 직장을 찾으세요!",
            back: "뒤로가기",
            share_via: "공유하기",
        },
        th: {
            about_us: "เกี่ยวกับเรา",
            careers: "อาชีพ",
            stay_connected: "เชื่อมต่อกับเรา",
            contact_us: "ติดต่อเรา",
            language: "ภาษา",
            we_hunt: "เรากำลังตามหา คนที่ใช่",
            hot_job_week: "ตำแหน่งงานด่วนประจำสัปดาห์",
            hot_job_description: `ตรวจสอบ "ตำแหน่งงานด่วนประจำสัปดาห์" แล้วมาร่วมเป็นส่วนหนึ่งของทีมที่ได้รับรางวัลของเรา! ตำแหน่งงานนี้มอบโอกาสในการเติบโต สวัสดิการที่ดีเยี่ยม และโอกาสในการทำงานกับเทคโนโลยี AI ที่ล้ำสมัย สมัครตอนนี้และมาร่วมเป็นส่วนในการเดินทางสู่ความเป็นเลิศไปกับเรา`,
            apply_now: "สมัครตอนนี้!",
            find_job: "หางานที่ใช่สำหรับคุณ!",
            preferred_language: "ภาษาที่ต้องการ",
            select_language: "เลือกภาษาของคุณ",
            choose_location: "เลือกตำแหน่งที่ตั้ง",
            choose_job_type: "เลือกประเภทงาน",
            choose_job: "เลือกตำแหน่งงาน",
            generate_qr: "สร้าง QR และสมัครได้เลย",
            team_response: "ทีมงานของเราจะตอบกลับภายใน 48 ชั่วโมง!",
            hot_job: "ตำแหน่งงานด่วน",
            opportunities: "โอกาส",
            refer_friend: "แนะนำเพื่อน",
            find_perfect_job: "ค้นหางานที่ใช่สำหรับคุณ!",
            back: "ย้อนกลับ",
            share_via: "แชร์ผ่าน",
        },
        my: {
            about_us: "Tentang Kami",
            careers: "Peluang Kerjaya",
            stay_connected: "Terus Berhubung",
            contact_us: "Hubungi Kami",
            language: "Bahasa",
            we_hunt: "Kami sedang mencari orang yang sesuai",
            hot_job_week: "Kerja hangat minggu ini",
            hot_job_description: `Lihat Pekerjaan Terhangat Minggu Ini dan sertai pasukan kami yang memenangi anugerah! Kedudukan ini menawarkan peluang pertumbuhan yang sangat baik, faedah kompetitif dan peluang untuk bekerja dengan teknologi AI yang canggih. Mohon sekarang dan jadilah sebahagian daripada perjalanan kami ke arah kecemerlangan!`,
            apply_now: "Mohon Sekarang!",
            find_job: "Cari pekerjaan impian anda!",
            preferred_language: "Bahasa Pilihan",
            select_language: "Pilih bahasa anda",
            choose_location: "Pilih lokasi anda",
            choose_job_type: "Pilih jenis pekerjaan anda",
            choose_job: "Pilih kerja anda",
            generate_qr: "Jana kod QR dan mohon sekarang!",
            team_response: "Pasukan kami akan bertindak balas dalam masa 48 jam!",
            hot_job: "Kerja hangat",
            opportunities: "Peluang",
            refer_friend: "Rujuk kawan anda",
            find_perfect_job: "Cari pekerjaan sempurna anda!",
            back: "Kembali",
            share_via: "Kongsi melalui",
        },
    };
    

    return translations[language];
}


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLanguage = urlParams.get('lang') || localStorage.getItem('selectedLanguage') || 'english';

    // Update page content based on selected language
    updatePageContent(selectedLanguage);

    // Update video source based on selected language
    const videoElement = document.getElementById('video-source');
    const videoSources = {
        english: 'video_english.mp4',
        korean: 'video_korean.mp4',
        thai: 'video_thai.mp4',
        malay: 'video_malay.mp4',
        mandarin: 'video_mandarin.mp4',
        japanese: 'video_japanese.mp4'
    };
    videoElement.src = videoSources[selectedLanguage];
    videoElement.load(); // Reload the video

    // Update "How To" link
    updateHowToLink(selectedLanguage);
});

// Function to update "How To" link with current language and UTM parameters
function updateHowToLink(language) {
    const howToLink = document.querySelector("#how-to a");
    const utmParams = getUTMParameters();
    howToLink.href = `HowtoVid.html?lang=${language}${utmParams}`;
}

// Function to get UTM parameters from the URL
function getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign']; // Add any other UTM parameters you need to pass
    let utmString = '';

    utmParams.forEach(param => {
        const value = urlParams.get(param);
        if (value) {
            utmString += `&${param}=${value}`;
        }
    });

    return utmString;
}


// Function to update page content based on selected language
function updatePageContent(language) {
    const translations = translate(language);

    // Update labels and texts
    document.querySelector(".language-selection label").textContent = translations.chooseLanguage;
    document.querySelector("#step1 h2").textContent = translations.enterBMS;
    document.querySelector("#bms-id").placeholder = translations.bmsIdPlaceholder;
    document.querySelectorAll("#step1 h2")[1].textContent = translations.chooseYourReferrerPreferred;
    document.querySelectorAll("#step1 h3")[0].textContent = translations.languageLabel;
    document.querySelectorAll("#step1 h3")[1].textContent = translations.locationLabel;
    document.querySelectorAll("#step1 h3")[2].textContent = translations.jobLabel;
    document.querySelector("#step1 button").textContent = translations.nextButton;
    document.querySelector("#how-to button1").textContent = translations.HowtoButton;
    document.querySelector("#step2 h2").textContent = translations.thankYou;
    document.querySelector("#step2 button").textContent = translations.BackButton;
    document.querySelector("#step2 p:nth-of-type(1)").textContent = translations.referralMessage1;
    document.querySelector("#share-button-whatsapp").textContent = translations.shareWhatsApp;
    document.querySelector("#share-button-line").textContent = translations.shareLine;
    document.querySelector("#scan-code-button").textContent = translations.qrCodeMessage;
    document.querySelector("#thank-you").textContent = translations.thankYou;
    document.querySelector("#referral-message").textContent = translations.referralMessage1;
    document.querySelector("#vr-message").textContent = translations.vrMessage;
    document.querySelector("#talent-team-message").textContent = translations.talentTeamMessage;

    // Update options in select elements
 }


document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobSelect = document.getElementById('job-type-select');
    const jobTitleDisplay = document.getElementById('job-title-display');
    const jobLinkDisplay = document.getElementById('job-link-display');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const generatedLink = document.getElementById('generated-link');
    const qrImg = document.getElementById('qrImg');
    



    document.getElementById("emp-lang-select").addEventListener("change", function() {
        const selectedLanguage = this.value;
        updatePageContent(selectedLanguage);
    
        // Update the URL with the selected language
        const url = new URL(window.location);
        url.searchParams.set('lang', selectedLanguage);
        window.history.pushState({}, '', url);
    
        // Store the selected language in local storage
        localStorage.setItem('selectedLanguage', selectedLanguage);
    
        // Update "How To" link with the new language and UTM parameters
        updateHowToLink(selectedLanguage);
    });
    

    
 
    let jsonData = [];

    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            populatePreferredLanguages(jsonData);
            populateLocations(jsonData); // Populate both language and location at the beginning
        })
        .catch(error => console.error('Error loading JSON data:', error));
    
    // Populate preferred languages based on JSON data
    function populatePreferredLanguages(data) {
        const languages = [...new Set(data.map(item => item.Language))];
        populateDropdown(languageSelect, languages);
    }
    
    // Populate locations based on JSON data
    function populateLocations(data) {
        const locations = [...new Set(data.map(item => item.Location))];
        populateDropdown(locationSelect, locations);
    }
    
    // Event listener for language selection
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        
        // Filter locations based on the selected language, but keep existing location selection
        const filteredLocations = selectedLanguage 
            ? [...new Set(jsonData.filter(item => item.Language === selectedLanguage).map(item => item.Location))]
            : [...new Set(jsonData.map(item => item.Location))]; // If no language is selected, show all locations
    
        // Update the locations dropdown but keep the previously selected location if still valid
        updateDropdownWithSelectedValue(locationSelect, filteredLocations, locationSelect.value);
    
        // Update jobs dropdown if both language and location are selected
        updateJobsDropdown();
    });
    
    // Event listener for location selection
    locationSelect.addEventListener('change', function() {
        const selectedLocation = this.value;
    
        // Filter languages based on the selected location, but keep existing language selection
        const filteredLanguages = selectedLocation
            ? [...new Set(jsonData.filter(item => item.Location === selectedLocation).map(item => item.Language))]
            : [...new Set(jsonData.map(item => item.Language))]; // If no location is selected, show all languages
    
        // Update the languages dropdown but keep the previously selected language if still valid
        updateDropdownWithSelectedValue(languageSelect, filteredLanguages, languageSelect.value);
    
        // Update jobs dropdown if both language and location are selected
        updateJobsDropdown();
    });
    
    // Update the job dropdown based on both selected language and location
    function updateJobsDropdown() {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
    
        if (selectedLanguage && selectedLocation) {
            const jobs = jsonData
                .filter(item => item.Language === selectedLanguage && item.Location === selectedLocation)
                .map(item => item.Positions);
            populateDropdown(jobSelect, jobs);
        } else {
            // Reset jobs dropdown if either dropdown is not selected
            populateDropdown(jobSelect, []);
        }
    }
    
    // Function to populate a dropdown with options, keeping the current selected value if possible
    function updateDropdownWithSelectedValue(dropdown, options, currentValue) {
        populateDropdown(dropdown, options);
    
        // If the current value is still a valid option, reselect it
        if (options.includes(currentValue)) {
            dropdown.value = currentValue;
        } else {
            dropdown.value = ''; // Reset to default if the current value is no longer valid
        }
    }
    
    // Function to populate a dropdown with options
    function populateDropdown(dropdown, options) {
        dropdown.innerHTML = ''; // Clear previous options
        dropdown.appendChild(new Option('--Select--', '')); // Default "Select" option
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.text = option;
            dropdown.appendChild(opt);
        });
    }
    
    // Move to the next step and display the generated link
    window.nextStep = function() {
        const bmsId = document.getElementById('bms-id').value;
        if (!bmsId) {
            alert("Please enter a valid BMS ID (numbers only).");
            return;
        }
    
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        const selectedJob = jobSelect.value;
        const jobData = jsonData.find(item => item.Language === selectedLanguage && item.Location === selectedLocation && item.Positions === selectedJob);
    
        if (jobData) {
            const finalLink = jobData["Evergreen link"] + bmsId;
            generatedLink.innerHTML = `<a href="${finalLink}" target="_blank">${finalLink}</a>`;
            generateQrCode(finalLink);
        }
    
        step1.style.display = 'none';
        step2.style.display = 'block';
    };
    
    // Function to populate dropdown options
    function populateDropdown(dropdown, options) {
        dropdown.innerHTML = '<option value="">Select</option>';
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            dropdown.appendChild(opt);
        });
    }

    // Function to generate QR code
    function generateQrCode(url) {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
        qrImg.src = qrCodeUrl;
    }

    // Event listener for share buttons
    document.getElementById("share-button-whatsapp").addEventListener("click", function() {
        const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
        const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message + "\n\n" + generatedLink.querySelector('a').href + "\n\n" + message2)}`;
        window.open(whatsappLink, "_blank");
    });

    document.getElementById("share-button-line").addEventListener("click", function() {
        const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
        const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
        const lineLink = `https://line.me/R/msg/text/?${encodeURIComponent(message + "\n\n" + generatedLink.querySelector('a').href + "\n\n" + message2)}`;
        window.open(lineLink, "_blank");
    });

 
    document.getElementById("share-button-facebook").addEventListener("click", function() {
        const facebookMessage = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
        const facebookMessage2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
        const facebookCaption = encodeURIComponent(facebookMessage + "\n\n" + generatedLink.querySelector('a').href + "\n\n" + facebookMessage2);
        const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(generatedLink.querySelector('a').href)}&quote=${facebookCaption}`;
        window.open(facebookLink, "_blank", "width=600,height=400");
    });
    
      
    document.getElementById("share-button-IG").addEventListener("click", function() {
        const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
        const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
        const instagramCaption = encodeURIComponent(message + "\n\n" + generatedLink.querySelector('a').href + "\n\n" + message2);
        
        // Open Instagram app if available, otherwise open Instagram website
        const instagramAppLink = `instagram://library?Caption=${instagramCaption}`;
        const instagramWebLink = `https://www.instagram.com/stories/myday?utm_source=ig_story_share&igshid=YOUR_IG_USER_ID`;
    
        // Try opening Instagram app, if it fails, open Instagram website
        window.open(instagramAppLink, "_blank", "width=600,height=400") || window.open(instagramWebLink, "_blank");
    });
    
    document.getElementById("share-button-TikTok").addEventListener("click", function() {
        const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
        const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
        const tiktokCaption = encodeURIComponent(message + "\n\n" + generatedLink.querySelector('a').href + "\n\n" + message2);
        
        // Open TikTok app if available, otherwise open TikTok website
        const tiktokAppLink = `tiktok://share?text=${tiktokCaption}`;
        const tiktokWebLink = `https://www.tiktok.com/share?url=YOUR_VIDEO_URL`;
    
        // Try opening TikTok app, if it fails, open TikTok website
        window.open(tiktokAppLink, "_blank") || window.open(tiktokWebLink, "_blank");
    });
    
// Request prompt as last message
window.onload = function() {
    var prompts = document.querySelectorAll('.popup-content > div:not(.additional-logo):not(#how-to)');
    var lastPrompt = prompts[prompts.length - 1];
    lastPrompt.innerHTML += " ";
};
 // JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');

    video.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Prevent the default context menu from appearing

        // Display a custom menu at the mouse position
        // You can customize this menu with your own options and styling
        // For simplicity, let's just show an alert for now
        alert('Custom menu options here');
    });
});


});
function refreshPage() {
    location.reload();
}
