const App = {
    currentPage: 'home',

    init() {
        this.bindEvents();
        this.render();
    },

    bindEvents() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.getAttribute('data-page');
                if (page) this.navigate(page);
            });
        });

        // Hero card button
        const heroBtn = document.querySelector('.hero-card .btn');
        if (heroBtn) {
            heroBtn.addEventListener('click', () => this.navigate('practice'));
        }
    },

    navigate(pageId) {
        this.currentPage = pageId;
        
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-page') === pageId);
        });

        this.render();
    },

    render() {
        const viewContainer = document.getElementById('app-view');
        const pageTitle = document.getElementById('page-title');
        
        // Clear previous view
        viewContainer.innerHTML = '';

        switch(this.currentPage) {
            case 'home':
                pageTitle.textContent = 'Chào buổi chiều, Người dùng';
                this.renderDashboard(viewContainer);
                break;
            case 'practice':
                pageTitle.textContent = 'Trung tâm luyện tập';
                this.renderPractice(viewContainer);
                break;
            case 'analytics':
                pageTitle.textContent = 'Tiến độ của bạn';
                this.renderAnalytics(viewContainer);
                break;
            default:
                viewContainer.innerHTML = `<div class="placeholder-view">Tính năng ${this.currentPage} đang được phát triển...</div>`;
        }
    },

    renderDashboard(container) {
        // Dashboard is the default content in app.html, but let's re-render it if needed
        // For simplicity in this demo, we'll use a template approach
        container.innerHTML = `
            <div class="view-content" id="view-home">
                <div class="hero-card">
                    <div class="hero-content">
                        <h2>Sẵn sàng cho cuộc họp tiếp theo?</h2>
                        <p>Sử dụng AI Roleplay để chuẩn bị cho các tình huống thực tế và nhận phản hồi tức thì.</p>
                        <button class="btn btn-white" onclick="App.navigate('practice')">Bắt đầu Roleplay</button>
                    </div>
                    <div class="hero-image"><span class="large-icon">🤖</span></div>
                </div>
                <div class="quick-start-grid">
                    ${this.getQuickStartItems()}
                </div>
                <section class="recent-section">
                    <div class="section-header">
                        <h2>Bản ghi gần đây</h2>
                        <a href="#" class="see-all">Xem tất cả</a>
                    </div>
                    <div class="activity-list">
                        ${this.getActivityItems()}
                    </div>
                </section>
            </div>
        `;
    },

    renderPractice(container) {
        container.innerHTML = `
            <div class="practice-setup">
                <div class="setup-header" style="text-align:center; margin-bottom:48px;">
                    <h2>Chọn chế độ luyện tập</h2>
                    <p>Chuẩn bị kỹ lưỡng cho mọi cuộc hội thoại quan trọng.</p>
                </div>
                <div class="setup-grid">
                    <div class="setup-card" onclick="App.startSession('roleplay')">
                        <div class="icon">🎭</div>
                        <h3>Nhập vai AI</h3>
                        <p>Thực hành với đối tác AI linh hoạt.</p>
                        <button class="btn btn-outline" style="margin-top:20px; width:100%;">Bắt đầu</button>
                    </div>
                    <div class="setup-card" onclick="App.startSession('presentation')">
                        <div class="icon">🎤</div>
                        <h3>Thuyết trình</h3>
                        <p>Luyện tập slide và bài nói của bạn.</p>
                        <button class="btn btn-outline" style="margin-top:20px; width:100%;">Bắt đầu</button>
                    </div>
                    <div class="setup-card" onclick="App.startSession('interview')">
                        <div class="icon">💼</div>
                        <h3>Phỏng vấn</h3>
                        <p>Trả lời các câu hỏi phỏng vấn hóc búa.</p>
                        <button class="btn btn-outline" style="margin-top:20px; width:100%;">Bắt đầu</button>
                    </div>
                </div>
            </div>
        `;
    },

    startSession(type) {
        this.currentPage = 'session';
        document.getElementById('page-title').textContent = 'Đang trong phiên luyện tập...';
        this.render();
    },

    endSession() {
        this.currentPage = 'feedback';
        document.getElementById('page-title').textContent = 'Kết quả luyện tập';
        this.render();
    },

    renderAnalytics(container) {
        container.innerHTML = `
            <div class="analytics-view">
                <div class="stats-grid">
                    <div class="stat-card">
                        <h4>Tổng thời gian nói</h4>
                        <div class="value">12.5 giờ</div>
                        <div class="trend up">↑ 12% tuần này</div>
                    </div>
                    <div class="stat-card">
                        <h4>Điểm trung bình</h4>
                        <div class="value">8.2/10</div>
                        <div class="trend up">↑ 0.5 điểm</div>
                    </div>
                    <div class="stat-card">
                        <h4>Từ đệm (Filler words)</h4>
                        <div class="value">2.1/phút</div>
                        <div class="trend down">↓ 15% cải thiện</div>
                    </div>
                </div>
                <div class="chart-section" style="background:white; padding:32px; border-radius:24px; margin-top:32px;">
                    <h3>Xu hướng tiến bộ</h3>
                    <canvas id="progressChart" style="max-height: 300px;"></canvas>
                </div>
            </div>
        `;
        this.initCharts();
    },

    getQuickStartItems() {
        return `
            <div class="action-card roleplay">
                <div class="card-badge">Phổ biến nhất</div>
                <div class="card-icon">🎭</div>
                <h3>Nhập vai AI</h3>
                <p>Đối thoại với khách hàng, sếp hoặc ứng viên AI.</p>
                <button class="btn-secondary" onclick="App.navigate('practice')">Thực hành ngay</button>
            </div>
            <div class="action-card analyze">
                <div class="card-icon">📹</div>
                <h3>Phân tích video</h3>
                <p>Tải video lên để nhận phân tích chuyên sâu về giao tiếp.</p>
                <button class="btn-secondary">Tải lên</button>
            </div>
            <div class="action-card speeches">
                <div class="card-icon">🎤</div>
                <h3>Bài phát biểu</h3>
                <p>Luyện tập thuyết trình và nhận phản hồi về tốc độ, từ đệm.</p>
                <button class="btn-secondary" onclick="App.navigate('practice')">Bắt đầu</button>
            </div>
            <div class="action-card games">
                <div class="card-icon">🎮</div>
                <h3>Trò chơi ngôn ngữ</h3>
                <p>Cải thiện vốn từ và phản xạ nhanh thông qua các trò chơi.</p>
                <button class="btn-secondary">Chơi ngay</button>
            </div>
        `;
    },

    getActivityItems() {
        return `
            <div class="activity-item">
                <div class="activity-thumb"><span class="icon">🎭</span></div>
                <div class="activity-info">
                    <h4>Luyện xử lý từ chối - Khách hàng khó tính</h4>
                    <p>Hôm nay • 5:30 CH • 8 phút</p>
                </div>
                <div class="activity-meta">
                    <div class="score-pill success">8.5/10</div>
                    <span class="more-options">⋮</span>
                </div>
            </div>
        `;
    },

    initCharts() {
        const ctx = document.getElementById('progressChart');
        if (!ctx) return;
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
                datasets: [{
                    label: 'Điểm giao tiếp',
                    data: [7.2, 7.5, 7.3, 8.0, 8.2, 8.1, 8.5],
                    borderColor: '#4F46E5',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(79, 70, 229, 0.1)'
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: false, min: 6 } }
            }
        });
    }
};

window.onload = () => App.init();
