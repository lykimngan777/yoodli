const layout = {
    header: `
        <header class="navbar">
            <div class="container">
                <a href="/index.html" class="logo-link"><span class="logo-text">yoodli</span></a>
                <nav class="nav-menu">
                    <div class="nav-item-wrapper">
                        <a href="#" class="nav-trigger">Nền tảng ▾</a>
                        <div class="mega-menu">
                            <div class="menu-column">
                                <h4>Tính năng</h4>
                                <a href="/platform/ai-roleplays.html" class="menu-link"><span class="title">Nhập vai AI</span></a>
                                <a href="/platform/ai-feedback.html" class="menu-link"><span class="title">Phản hồi AI</span></a>
                                <a href="/platform/ai-coaching.html" class="menu-link"><span class="title">Huấn luyện AI</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="nav-item-wrapper">
                        <a href="#" class="nav-trigger">Giải pháp ▾</a>
                    </div>
                    <a href="/pricing.html" class="nav-trigger">Bảng giá</a>
                    <a href="/about.html" class="nav-trigger">Về chúng tôi</a>
                </nav>
                <div class="nav-actions">
                    <a href="/app.html" class="btn btn-primary">Dùng thử</a>
                </div>
            </div>
        </header>
    `,
    footer: `
        <footer class="footer">
            <div class="container" style="text-align:center;">
                <p>&copy; 2024 Yoodli Clone Việt Nam. 1:1 Toàn bộ hệ thống.</p>
            </div>
        </footer>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    // Prepend header
    const headerEl = document.createElement('div');
    headerEl.innerHTML = layout.header;
    body.insertBefore(headerEl.firstElementChild, body.firstChild);

    // Append footer
    const footerEl = document.createElement('div');
    footerEl.innerHTML = layout.footer;
    body.appendChild(footerEl.firstElementChild);
});
