const layout = {
    banner: `
        <div class="top-banner" style="background: #000033; color: white; text-align: center; padding: 10px 20px; font-size: 13px; font-weight: 600; letter-spacing: 0.3px;">
            <span style="opacity: 0.9;">📓 Yoodli ra mắt Sổ tay 90 ngày sau SKO để biến các buổi khởi động thành hành động thực tế.</span>
            <a href="#" style="color: #8B5CF6; text-decoration: underline; margin-left: 8px;">Tải xuống tại đây</a>
        </div>
    `,
    header: `
        <header class="navbar" style="background: white; border-bottom: 1px solid #F1F5F9; position: sticky; top: 0; z-index: 1000;">
            <div class="container" style="display: flex; align-items: center; justify-content: space-between; max-width: 1400px; margin: 0 auto; padding: 0 40px;">
                <div style="display: flex; align-items: center; gap: 40px;">
                    <a href="{BASE}index.html" class="logo" style="text-decoration: none; display: flex; align-items: center; gap: 8px; font-size: 24px; font-weight: 800; color: #4F46E5;">
                        <i class="ph-fill ph-microphone-stage" style="font-size: 28px;"></i>
                        <span>yoodli</span>
                    </a>
                    <nav class="nav-links" style="display: flex; gap: 32px; align-items: center;">
                        <!-- NỀN TẢNG -->
                        <div class="nav-item" style="position: relative;">
                            <a href="#" class="nav-link">NỀN TẢNG</a>
                            <div class="dropdown" style="min-width: 280px; position: absolute; top: 100%; left: 0; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); padding: 15px; opacity: 0; visibility: hidden; transition: all 0.3s ease; transform: translateY(10px); border: 1px solid #F1F5F9;">
                                <a href="{BASE}platform/ai-roleplays.html" class="dropdown-link">Nhập vai AI</a>
                                <a href="{BASE}platform/ai-tutor.html" class="dropdown-link">Gia sư AI</a>
                                <a href="{BASE}platform/ai-continuous-coaching.html" class="dropdown-link">Huấn luyện AI Liên tục</a>
                                <a href="{BASE}platform/ai-experiential-learning.html" class="dropdown-link">Học tập Trải nghiệm</a>
                                <a href="{BASE}platform/ai-feedback.html" class="dropdown-link">Phản hồi Cá nhân hóa</a>
                                <a href="{BASE}platform/ai-analytics-reporting.html" class="dropdown-link">Phân tích & Báo cáo</a>
                                <a href="{BASE}platform/ai-integrations-mcp.html" class="dropdown-link">Tích hợp & MCP</a>
                            </div>
                        </div>

                        <!-- GIẢI PHÁP (Mega Menu) -->
                        <div class="nav-item" style="position: relative;">
                            <a href="#" class="nav-link">GIẢI PHÁP</a>
                            <div class="dropdown mega-menu" style="min-width: 950px; position: absolute; top: 100%; left: -300px; background: white; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); padding: 30px; opacity: 0; visibility: hidden; transition: all 0.3s ease; transform: translateY(10px); border: 1px solid #F1F5F9; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;">
                                <div class="mega-col">
                                    <div class="mega-title" style="font-size: 11px; font-weight: 800; color: #38BDF8; letter-spacing: 0.1em; margin-bottom: 20px;">CHO ĐỘI NGŨ</div>
                                    <div style="display: flex; flex-direction: column; gap: 15px;">
                                        <a href="{BASE}for-business/revenue-teams.html" class="mega-link">Đội ngũ Doanh thu</a>
                                        <a href="{BASE}for-business/sales-enablement.html" class="mega-link">Hỗ trợ Bán hàng</a>
                                        <a href="{BASE}for-business/learning-and-development.html" class="mega-link">Học tập & Phát triển</a>
                                        <a href="{BASE}for-business/executive-coaching.html" class="mega-link">Huấn luyện Điều hành</a>
                                    </div>
                                </div>
                                <div class="mega-col">
                                    <div class="mega-title" style="font-size: 11px; font-weight: 800; color: #38BDF8; letter-spacing: 0.1em; margin-bottom: 20px;">NGÀNH NGHỀ</div>
                                    <div style="display: flex; flex-direction: column; gap: 15px;">
                                        <a href="{BASE}industries/tech-saas.html" class="mega-link">Công nghệ & SaaS</a>
                                        <a href="{BASE}industries/financial-services.html" class="mega-link">Dịch vụ Tài chính</a>
                                        <a href="{BASE}industries/healthcare.html" class="mega-link">Y tế</a>
                                        <a href="{BASE}industries/education.html" class="mega-link">Giáo dục</a>
                                        <a href="{BASE}industries/professional-services.html" class="mega-link">Dịch vụ Chuyên nghiệp</a>
                                        <a href="{BASE}industries/retail-hospitality.html" class="mega-link">Bán lẻ & Khách sạn</a>
                                    </div>
                                </div>
                                <div class="mega-col">
                                    <div class="mega-title" style="font-size: 11px; font-weight: 800; color: #38BDF8; letter-spacing: 0.1em; margin-bottom: 20px;">TRƯỜNG HỢP SỬ DỤNG</div>
                                    <div style="display: flex; flex-direction: column; gap: 15px;">
                                        <a href="{BASE}for-business/sales-training.html" class="mega-link">Đào tạo Bán hàng</a>
                                        <a href="{BASE}for-business/customer-support-training.html" class="mega-link">Đào tạo Hỗ trợ Khách hàng</a>
                                        <a href="{BASE}for-business/onboarding-certification.html" class="mega-link">Nhập môn & Chứng chỉ</a>
                                        <a href="{BASE}for-business/public-speaking.html" class="mega-link">Diễn thuyết Công cộng</a>
                                        <a href="{BASE}for-business/partner-enablement.html" class="mega-link">Hỗ trợ Đối tác</a>
                                        <a href="{BASE}for-business/interview-prep.html" class="mega-link">Chuẩn bị Phỏng vấn</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- BẢNG GIÁ -->
                        <div class="nav-item"><a href="{BASE}pricing.html" class="nav-link">BẢNG GIÁ</a></div>

                        <!-- TÀI NGUYÊN -->
                        <div class="nav-item" style="position: relative;">
                            <a href="#" class="nav-link">TÀI NGUYÊN</a>
                            <div class="dropdown" style="min-width: 280px; position: absolute; top: 100%; left: 0; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); padding: 15px; opacity: 0; visibility: hidden; transition: all 0.3s ease; transform: translateY(10px); border: 1px solid #F1F5F9;">
                                <a href="{BASE}resources/blog.html" class="dropdown-link">Blog</a>
                                <a href="{BASE}resources/feature-announcements.html" class="dropdown-link">Thông báo Tính năng</a>
                                <a href="{BASE}resources/case-studies.html" class="dropdown-link">Câu chuyện Thành công</a>
                                <a href="{BASE}resources/press.html" class="dropdown-link">Báo chí</a>
                                <a href="{BASE}resources/help-center.html" class="dropdown-link">Trung tâm Trợ giúp</a>
                                <a href="{BASE}resources/trust-center.html" class="dropdown-link">Trung tâm Tin cậy</a>
                            </div>
                        </div>

                        <!-- VỀ CHÚNG TÔI -->
                        <div class="nav-item" style="position: relative;">
                            <a href="#" class="nav-link">VỀ CHÚNG TÔI</a>
                            <div class="dropdown" style="min-width: 260px; position: absolute; top: 100%; left: 0; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); padding: 15px; opacity: 0; visibility: hidden; transition: all 0.3s ease; transform: translateY(10px); border: 1px solid #F1F5F9;">
                                <a href="{BASE}about/team.html" class="dropdown-link">Đội ngũ</a>
                                <a href="#" class="dropdown-link">Tuyển dụng</a>
                                <a href="{BASE}about/faq.html" class="dropdown-link">FAQ</a>
                                <a href="{BASE}about/webinars.html" class="dropdown-link">Hội thảo Trực tuyến</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="nav-actions" style="display: flex; align-items: center; gap: 16px;">
                    <a href="#" style="font-weight: 700; font-size: 14px; color: #4F46E5; text-decoration: none;">Đăng nhập</a>
                    <a href="{BASE}app.html" style="padding: 10px 24px; border: 1.5px solid #4F46E5; border-radius: 8px; color: #4F46E5; font-weight: 700; font-size: 14px; text-decoration: none; transition: all 0.2s;">Dùng thử Yoodli</a>
                    <a href="{BASE}demo.html" style="padding: 11px 26px; background: linear-gradient(90deg, #38BDF8 0%, #818CF8 100%); border-radius: 8px; color: white; font-weight: 700; font-size: 14px; text-decoration: none; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);">Nhận Demo</a>
                </div>
            </div>
        </header>
    `,
    footer: `
        <footer style="background: #F5F3FF; color: #1E293B; padding: 100px 0 40px; border-top: 1px solid rgba(0,0,0,0.05); font-family: 'Inter', sans-serif;">
            <div class="container" style="max-width: 1400px; margin: 0 auto; padding: 0 40px;">
                <div style="display: grid; grid-template-columns: 2fr repeat(6, 1fr); gap: 40px; margin-bottom: 80px;">
                    <!-- Logo Column -->
                    <div class="footer-col">
                        <div class="yoodli-logo-small" style="font-size: 24px; margin-bottom: 24px;">
                            <i class="ph-fill ph-microphone-stage"></i> yoodli
                        </div>
                        <p style="font-size: 14px; line-height: 1.6; color: #64748B; margin-bottom: 24px;">
                            Nền tảng huấn luyện nhập vai AI thực tế giúp bạn giao tiếp tự tin và hiệu quả hơn trong mọi tình huống.
                        </p>
                    </div>
                    <!-- Nền tảng -->
                    <div class="footer-col">
                        <h4 style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Nền tảng</h4>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <a href="{BASE}platform/ai-roleplays.html" class="footer-link">Nhập vai AI</a>
                            <a href="{BASE}platform/ai-tutor.html" class="footer-link">Gia sư AI</a>
                            <a href="{BASE}platform/ai-continuous-coaching.html" class="footer-link">Huấn luyện AI Liên tục</a>
                            <a href="{BASE}platform/ai-experiential-learning.html" class="footer-link">Học tập Trải nghiệm</a>
                            <a href="#" class="footer-link">Phản hồi Cá nhân hóa</a>
                            <a href="#" class="footer-link">Phân tích & Báo cáo</a>
                            <a href="#" class="footer-link">Tích hợp & MCP</a>
                        </div>
                    </div>

                    <!-- Cho đội ngũ -->
                    <div class="footer-col">
                        <h4 style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Cho đội ngũ</h4>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <a href="{BASE}for-business/revenue-teams.html" class="footer-link">Đội ngũ Doanh thu</a>
                            <a href="{BASE}for-business/sales-enablement.html" class="footer-link">Hỗ trợ Bán hàng</a>
                            <a href="{BASE}for-business/learning-and-development.html" class="footer-link">Học tập & Phát triển</a>
                            <a href="{BASE}for-business/executive-coaching.html" class="footer-link">Huấn luyện Điều hành</a>
                            <a href="#" class="footer-link">Lãnh đạo</a>
                            <a href="#" class="footer-link">Kỹ thuật</a>
                        </div>
                    </div>

                    <!-- Ngành nghề -->
                    <div class="footer-col">
                        <h4 style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Ngành nghề</h4>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <a href="{BASE}industries/tech-saas.html" class="footer-link">Công nghệ & SaaS</a>
                            <a href="{BASE}industries/financial-services.html" class="footer-link">Dịch vụ Tài chính</a>
                            <a href="{BASE}industries/healthcare.html" class="footer-link">Y tế</a>
                            <a href="{BASE}industries/education.html" class="footer-link">Giáo dục</a>
                            <a href="{BASE}industries/professional-services.html" class="footer-link">Dịch vụ Chuyên nghiệp</a>
                            <a href="{BASE}industries/retail-hospitality.html" class="footer-link">Bán lẻ & Khách sạn</a>
                        </div>
                    </div>

                    <!-- Trường hợp sử dụng -->
                    <div class="footer-col">
                        <h4 style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Sử dụng</h4>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <a href="{BASE}for-business/sales-training.html" class="footer-link">Đào tạo Bán hàng</a>
                            <a href="{BASE}for-business/customer-support-training.html" class="footer-link">Đào tạo Hỗ trợ Khách hàng</a>
                            <a href="{BASE}for-business/onboarding-certification.html" class="footer-link">Nhập môn & Chứng chỉ</a>
                            <a href="{BASE}for-business/public-speaking.html" class="footer-link">Diễn thuyết</a>
                            <a href="{BASE}for-business/partner-enablement.html" class="footer-link">Hỗ trợ Đối tác</a>
                            <a href="{BASE}for-business/interview-prep.html" class="footer-link">Chuẩn bị Phỏng vấn</a>
                        </div>
                    </div>

                    <!-- Về chúng tôi -->
                    <div class="footer-col">
                        <h4 style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Công ty</h4>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <a href="#" class="footer-link">Đội ngũ</a>
                            <a href="#" class="footer-link">Tuyển dụng</a>
                            <a href="#" class="footer-link">FAQ</a>
                            <a href="#" class="footer-link">Hội thảo</a>
                            <a href="#" class="footer-link">Trạng thái</a>
                            <a href="#" class="footer-link">Danh bạ Coach</a>
                        </div>
                    </div>

                    <!-- Tài nguyên -->
                    <div class="footer-col">
                        <h4 style="font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">Tài nguyên</h4>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <a href="{BASE}resources/blog.html" class="footer-link">Blog</a>
                            <a href="{BASE}resources/feature-announcements.html" class="footer-link">Tính năng mới</a>
                            <a href="{BASE}resources/case-studies.html" class="footer-link">Case Studies</a>
                            <a href="#" class="footer-link">Báo chí</a>
                            <a href="#" class="footer-link">Trợ giúp</a>
                            <a href="#" class="footer-link">Khóa học</a>
                        </div>
                    </div>

                    <!-- Contact & CTA -->
                    <div class="footer-col" style="display: flex; flex-direction: column; align-items: flex-end; gap: 24px;">
                        <div style="display: flex; gap: 20px; font-size: 24px; color: #000235;">
                            <a href="#" style="color: inherit;"><i class="ph-fill ph-linkedin-logo"></i></a>
                            <a href="#" style="color: inherit;"><i class="ph-fill ph-twitter-logo"></i></a>
                            <a href="#" style="color: inherit;"><i class="ph-fill ph-youtube-logo"></i></a>
                            <a href="#" style="color: inherit;"><i class="ph-fill ph-instagram-logo"></i></a>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
                            <a href="{BASE}pricing.html" class="footer-cta-btn">
                                <i class="ph-fill ph-tag"></i> Xem bảng giá
                            </a>
                            <a href="{BASE}demo.html" class="footer-cta-btn">
                                <i class="ph-fill ph-video-camera"></i> Nhận Demo
                            </a>
                            <a href="#" class="footer-cta-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" style="height: 16px;"> Tham gia cộng đồng
                            </a>
                        </div>
                    </div>
                </div>

                <div style="border-top: 1px solid rgba(0,0,0,0.05); padding-top: 40px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: #64748B;">
                    <div>© 2024 Yoodli Vietnam Clone.</div>
                    <div style="display: flex; gap: 32px;">
                        <a href="#" class="footer-bottom-link">Liên hệ</a>
                        <a href="#" class="footer-bottom-link">Chính sách Bảo mật</a>
                        <a href="#" class="footer-bottom-link">Điều khoản Dịch vụ</a>
                        <a href="#" class="footer-bottom-link">Tùy chọn Cookie</a>
                    </div>
                </div>
            </div>
        </footer>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // Path Depth Detection logic
    const path = window.location.pathname;
    let base = './';
    if (path.includes('/resources/') || path.includes('/platform/') || path.includes('/solutions/') || path.includes('/for-business/') || path.includes('/industries/') || path.includes('/about/')) {
        base = '../';
    }

    // Inject Styles for interactions
    const styleId = 'master-layout-styles';
    if (!document.getElementById(styleId)) {
        const styleEl = document.createElement('style');
        styleEl.id = styleId;
        styleEl.textContent = `
            .nav-link {
                position: relative;
                font-weight: 700;
                font-size: 13px;
                text-decoration: none;
                color: #1E293B;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                padding: 24px 0;
                display: inline-block;
                transition: color 0.3s ease;
            }
            .nav-link:hover {
                color: #4F46E5;
            }
            .nav-link::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 3px;
                background: #4F46E5;
                transition: width 0.3s ease;
            }
            .nav-link:hover::after {
                width: 100%;
            }
            .nav-item:hover .dropdown { 
                opacity: 1 !important; 
                visibility: visible !important; 
                transform: translateY(0) !important; 
                top: 100% !important; 
            }
            .dropdown-link {
                font-size: 18px;
                color: #000235;
                text-decoration: none;
                font-weight: 500;
                padding: 12px 10px;
                border-radius: 8px;
                transition: all 0.2s ease;
                display: block;
            }
            .dropdown-link:hover {
                color: #4F46E5;
            }
            .mega-link {
                font-size: 18px;
                color: #000235;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.2s ease;
                display: block;
            }
            .mega-link:hover {
                color: #4F46E5;
            }
            .nav-item > a:hover { color: #4F46E5 !important; }
            .nav-actions a:nth-child(2):hover { background: #F5F3FF; }
            .nav-actions a:nth-child(3):hover { opacity: 0.9; transform: translateY(-1px); }

            /* Footer Styles */
            .footer-link {
                color: #475569;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                transition: color 0.2s ease;
            }
            .footer-link:hover {
                color: #4F46E5;
            }
            .footer-cta-btn {
                background: white;
                color: #1E293B;
                padding: 12px 24px;
                border-radius: 99px;
                text-decoration: none;
                font-size: 14px;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                transition: all 0.2s ease;
                border: 1px solid #E2E8F0;
            }
            .footer-cta-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(0,0,0,0.1);
                border-color: #4F46E5;
                color: #4F46E5;
            }
            .footer-bottom-link {
                color: #64748B;
                text-decoration: none;
                transition: color 0.2s ease;
            }
            .footer-bottom-link:hover {
                color: #4F46E5;
            }
        `;
        document.head.appendChild(styleEl);
    }

    const processTemplate = (html) => html.replace(/{BASE}/g, base);

    // Replace or Inject Banner
    const existingBanner = document.querySelector('.top-banner');
    if (existingBanner) {
        existingBanner.outerHTML = processTemplate(layout.banner);
    } else {
        document.body.insertAdjacentHTML('afterbegin', processTemplate(layout.banner));
    }

    // Replace or Inject Header
    const headerHTML = processTemplate(layout.header);
    const existingHeader = document.querySelector('header.navbar');
    if (existingHeader) {
        existingHeader.outerHTML = headerHTML;
    } else {
        const banner = document.querySelector('.top-banner');
        if (banner) {
            banner.insertAdjacentHTML('afterend', headerHTML);
        } else {
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
        }
    }

    // Replace or Inject Footer
    const footerHTML = processTemplate(layout.footer);
    const existingFooter = document.querySelector('footer.footer, footer.main-footer, footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});
