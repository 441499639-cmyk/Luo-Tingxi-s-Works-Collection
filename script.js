// 作品数据 - 按类别组织
const worksData = {
    'Fashion Photography': [
        {
            id: 21,
            title: 'Spring Collection 2026',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20fashion%20commercial%20photography%20spring%20collection%20studio%20lighting&image_size=landscape_4_3',
            description: '2026春季时尚系列摄影作品，展现了轻盈、明亮的春季风格。通过柔和的自然光和精心的造型，捕捉了服装的质感和设计细节。',
            concept: '摄影理念注重表现春季的活力和清新感，通过色彩搭配和光线运用，突出服装的设计特点和品牌的时尚定位。',
            date: '2026-02-10'
        },
        {
            id: 22,
            title: 'Evening Wear Series',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20evening%20wear%20fashion%20photography%20luxury%20style&image_size=landscape_4_3',
            description: '高级晚装系列摄影作品，展现了优雅、奢华的晚装设计。通过戏剧性的灯光和精致的构图，突出了服装的质感和细节。',
            concept: '摄影理念注重表现晚装的优雅和奢华感，通过灯光的对比和模特的姿态，创造出具有戏剧性和视觉冲击力的画面。',
            date: '2026-01-20'
        },
        {
            id: 23,
            title: 'Street Style Collection',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=urban%20street%20style%20fashion%20photography%20casual%20chic&image_size=landscape_4_3',
            description: '街头风格时尚摄影作品，展现了休闲、随性的都市时尚。通过户外场景和自然光线，捕捉了现代都市年轻人的时尚态度。',
            concept: '摄影理念注重表现街头时尚的真实性和活力，通过自然的构图和光线，传达出年轻、自由的时尚精神。',
            date: '2026-02-28'
        }
    ],
    'Product Photography': [
        {
            id: 11,
            title: 'Electronics Series',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20electronics%20product%20photography%20with%20clean%20background&image_size=landscape_4_3',
            description: '电子产品摄影系列，专注于展现科技产品的设计美感和功能特点。通过精心的布光和构图，突出产品的线条和质感。',
            concept: '摄影理念注重表现产品的科技感和现代感，通过简洁的背景和专业的灯光设置，让产品成为画面的焦点。',
            date: '2026-01-15'
        },
        {
            id: 12,
            title: 'Jewelry Collection',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20jewelry%20product%20photography%20diamond%20rings&image_size=landscape_4_3',
            description: '珠宝系列摄影作品，展现了珠宝的精致工艺和璀璨光芒。通过柔和的灯光和反光材质，突出珠宝的质感和价值。',
            concept: '摄影理念注重表现珠宝的奢华感和精致度，通过光线的反射和折射，创造出璀璨夺目的视觉效果。',
            date: '2026-01-25'
        },
        {
            id: 13,
            title: 'Cosmetics Line',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20cosmetics%20product%20photography%20makeup%20collection&image_size=landscape_4_3',
            description: '化妆品系列摄影作品，展现了彩妆产品的色彩和质感。通过鲜艳的色彩搭配和创意的构图，突出产品的视觉吸引力。',
            concept: '摄影理念注重表现化妆品的色彩丰富性和时尚感，通过创意的灯光和背景，创造出具有视觉冲击力的画面。',
            date: '2026-02-05'
        }
    ],
    'Portrait Photography': [
        {
            id: 31,
            title: 'Corporate Headshots',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=corporate%20business%20headshot%20professional%20photography&image_size=landscape_4_3',
            description: '企业商务肖像摄影作品，旨在展现企业员工的专业形象和精神面貌。通过自然的光线和放松的姿态，捕捉人物的个性和自信。',
            concept: '摄影理念注重真实感和专业度，通过简洁的背景和适当的灯光，突出人物的面部表情和眼神，传达出企业的专业形象。',
            date: '2026-03-05'
        },
        {
            id: 32,
            title: 'Artist Portraits',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20artist%20portrait%20photography%20artistic%20expression&image_size=landscape_4_3',
            description: '艺术家肖像摄影作品，展现了创作者的个性和艺术气质。通过独特的光影和构图，捕捉艺术家的精神面貌和创作状态。',
            concept: '摄影理念注重表现人物的个性和艺术气质，通过创意的灯光和背景，创造出具有艺术感和故事性的肖像作品。',
            date: '2026-03-15'
        },
        {
            id: 33,
            title: 'Family Portraits',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=warm%20family%20portrait%20photography%20indoor%20natural%20light&image_size=landscape_4_3',
            description: '家庭肖像摄影作品，展现了家庭成员之间的情感联系和温暖氛围。通过自然的光线和真实的互动，捕捉家庭的温馨瞬间。',
            concept: '摄影理念注重表现家庭的温暖和亲情，通过自然的构图和光线，创造出真实、感人的家庭肖像作品。',
            date: '2026-03-25'
        }
    ],
    'Event Photography': [
        {
            id: 41,
            title: 'Corporate Event',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20corporate%20event%20photography%20conference%20setting&image_size=landscape_4_3',
            description: '企业活动纪实摄影作品，记录了公司会议和活动的重要时刻。通过敏锐的观察力和快速的反应能力，捕捉活动的关键瞬间和氛围。',
            concept: '摄影理念注重真实性和时效性，通过自然的光线和构图，记录下活动的真实面貌和重要时刻。',
            date: '2026-03-20'
        },
        {
            id: 42,
            title: 'Fashion Show',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dynamic%20fashion%20show%20photography%20runway%20models&image_size=landscape_4_3',
            description: '时装秀纪实摄影作品，记录了时装表演的精彩瞬间。通过动态的构图和捕捉，展现了时装的设计和模特的表现力。',
            concept: '摄影理念注重动感和时尚感，通过高速快门和创意构图，捕捉时装秀的精彩瞬间和时尚氛围。',
            date: '2026-03-10'
        },
        {
            id: 43,
            title: 'Wedding Ceremony',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=romantic%20wedding%20ceremony%20photography%20emotional%20moments&image_size=landscape_4_3',
            description: '婚礼纪实摄影作品，记录了新人的重要时刻和情感表达。通过细腻的观察和捕捉，展现了婚礼的温馨和感人瞬间。',
            concept: '摄影理念注重情感表达和故事性，通过自然的光线和构图，记录下婚礼的真实情感和美好瞬间。',
            date: '2026-04-05'
        }
    ],
    'AI Generated': [
        {
            id: 51,
            title: 'Futuristic Concepts',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20AI%20generated%20photography%20science%20fiction%20concepts&image_size=landscape_4_3',
            description: '未来主义AI生成摄影作品，探索了科技与艺术的结合。通过AI算法的辅助，创造出具有未来感和科幻色彩的视觉作品。',
            concept: '创作理念探索了人工智能与摄影艺术的结合，通过AI技术的赋能，突破传统摄影的界限，创造出具有未来感的视觉作品。',
            date: '2026-04-01'
        },
        {
            id: 52,
            title: 'Surreal Landscapes',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=surreal%20AI%20generated%20landscape%20photography%20dreamlike%20scenes&image_size=landscape_4_3',
            description: '超现实风景AI生成摄影作品，创造出梦幻般的自然景观。通过AI算法的处理，将现实元素与想象融合，呈现出独特的视觉体验。',
            concept: '创作理念探索了AI在艺术创作中的潜力，通过算法的创意处理，创造出超越现实的梦幻景观，挑战传统摄影的边界。',
            date: '2026-04-10'
        },
        {
            id: 53,
            title: 'Abstract Portraits',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20AI%20generated%20portrait%20photography%20artistic%20expression&image_size=landscape_4_3',
            description: '抽象肖像AI生成摄影作品，探索了人物形象的艺术表达。通过AI算法的处理，将人物特征与抽象元素融合，创造出独特的艺术效果。',
            concept: '创作理念探索了AI在肖像摄影中的创新应用，通过算法的艺术处理，创造出具有抽象美感和艺术价值的肖像作品。',
            date: '2026-04-20'
        }
    ]
};

// DOM元素
const workCards = document.querySelectorAll('.work-card');
const modal = document.getElementById('workModal');
const closeModal = document.querySelector('.close');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalConcept = document.getElementById('modalConcept');
const modalDate = document.getElementById('modalDate');
const navbar = document.querySelector('.navbar');
const fadeElements = document.querySelectorAll('.works, .about, .footer');
const rippleElements = document.querySelectorAll('.work-card, .navbar-links a, .navbar-brand a, .close');

// 初始化函数
function init() {
    // 添加波纹效果
    addRippleEffect();
    
    // 作品卡片点击事件
    workCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('.work-category').textContent;
            openModal(category);
        });
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', closeModalFunc);
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', navbarScrollEffect);
    
    // 元素滚动渐显
    window.addEventListener('scroll', fadeInOnScroll);
    
    // 平滑滚动
    smoothScroll();
    
    // 为所有可点击元素添加按压效果
    addPressEffect();
}

// 全局变量
let currentCategory = '';
let currentIndex = 0;

// 打开模态框
function openModal(category) {
    currentCategory = category;
    currentIndex = 0;
    updateModal();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    // 添加模态框淡入动画
    modal.style.animation = 'fadeIn 0.3s ease-in-out';
}

// 更新模态框内容
function updateModal() {
    const currentWork = worksData[currentCategory][currentIndex];
    if (currentWork) {
        modalImage.src = currentWork.image;
        modalTitle.textContent = currentWork.title;
        modalCategory.textContent = currentCategory;
        modalDescription.textContent = currentWork.description;
        modalConcept.textContent = currentWork.concept;
        modalDate.textContent = currentWork.date;
        
        // 更新导航按钮状态
        updateNavigationButtons();
    }
}

// 更新导航按钮 - 图标形式
function updateNavigationButtons() {
    // 移除旧的导航按钮
    const existingNav = document.querySelector('.modal-navigation');
    if (existingNav) {
        existingNav.remove();
    }
    
    // 创建新的导航容器
    const navContainer = document.createElement('div');
    navContainer.className = 'modal-navigation';
    navContainer.style.cssText = `
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--gray-medium);
    `;
    
    // 导航标题
    const navTitle = document.createElement('h3');
    navTitle.textContent = '同类项目';
    navTitle.style.cssText = `
        font-size: 1.2rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        color: var(--black);
    `;
    navContainer.appendChild(navTitle);
    
    // 图标容器
    const iconsContainer = document.createElement('div');
    iconsContainer.style.cssText = `
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    `;
    
    // 为每个项目创建图标
    worksData[currentCategory].forEach((work, index) => {
        const iconItem = document.createElement('div');
        iconItem.style.cssText = `
            width: 80px;
            height: 60px;
            border-radius: 6px;
            overflow: hidden;
            cursor: pointer;
            transition: var(--transition);
            border: 2px solid ${index === currentIndex ? 'var(--primary-color)' : 'transparent'};
        `;
        
        // 图标悬停效果
        iconItem.addEventListener('mouseenter', () => {
            iconItem.style.transform = 'scale(1.05)';
            iconItem.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
        
        iconItem.addEventListener('mouseleave', () => {
            iconItem.style.transform = 'scale(1)';
            iconItem.style.boxShadow = 'none';
        });
        
        // 点击切换项目
        iconItem.addEventListener('click', () => {
            currentIndex = index;
            updateModal();
        });
        
        // 缩略图
        const thumbnail = document.createElement('img');
        thumbnail.src = work.image;
        thumbnail.alt = work.title;
        thumbnail.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: cover;
        `;
        
        iconItem.appendChild(thumbnail);
        iconsContainer.appendChild(iconItem);
    });
    
    navContainer.appendChild(iconsContainer);
    
    // 添加到模态框
    const modalInfo = document.querySelector('.modal-info');
    modalInfo.appendChild(navContainer);
}

// 关闭模态框
function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    // 重置模态框动画
    setTimeout(() => {
        modal.style.animation = '';
    }, 300);
}

// 导航栏滚动效果
function navbarScrollEffect() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// 元素滚动渐显
function fadeInOnScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// 平滑滚动
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 添加波纹效果
function addRippleEffect() {
    rippleElements.forEach(element => {
        element.classList.add('ripple');
    });
}

// 添加按压效果
function addPressEffect() {
    const pressElements = document.querySelectorAll('.work-card, .navbar-links a, .navbar-brand a, .close');
    pressElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        element.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// 初始化
init();