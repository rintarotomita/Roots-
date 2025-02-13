$(document).ready(function () {
    const images = $('.fade-image');
    let currentIndex = 0;
    $(images[currentIndex]).addClass('active');

    function changeImage() {
        $(images[currentIndex]).removeClass('active');

        currentIndex = (currentIndex + 1) % images.length;

        $(images[currentIndex]).addClass('active');
    }

    setInterval(changeImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null, // ビューポート
        rootMargin: "0px",
        threshold: 0.5 // 50%が画面内に表示されたらトリガー
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // ビューに入った時にクラス追加
                observer.unobserve(entry.target); // 一度だけアニメーションを発動
            }
        });
    }, options);

    // アニメーションさせたい要素を観察
    const elementsToObserve = document.querySelectorAll('.project-content1');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter"); // フィルターボタン
    const contentBoxes = document.querySelectorAll(".content-box-news"); // 各コンテンツ

    filterButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // ページ遷移を防ぐ

            const category = this.dataset.category; // クリックしたボタンのカテゴリを取得

            // すべてのcontent-boxを非表示にする
            contentBoxes.forEach(box => {
                box.style.display = "none";
            });

            // 選択したカテゴリのcontent-boxだけを表示
            contentBoxes.forEach(box => {
                if (category === "all" || box.dataset.category === category) {
                    box.style.display = "block";
                }
            });

            // ボタンの見た目を変更（選択中のボタンだけ強調）
            filterButtons.forEach(btn => btn.style.color = "black"); // すべて黒に戻す
            this.style.color = "#f4a261"; // 選択中のボタンの色を変更
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // IntersectionObserverのオプション設定
    const options = {
        root: null, // ビューポートを基準
        threshold: 0.5, // 50%以上が表示されるとき
    };

    // IntersectionObserverのコールバック関数
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // 一度表示されたら監視を停止
            }
        });
    }, options);

    // 監視対象の要素を取得
    const projectContentElements = document.querySelectorAll(".project-content1, .main-content, .main-content2");

    // 各要素を監視
    projectContentElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.project-content1'); // アニメーション対象の要素

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".main-text");

    if (!textElement) {
        console.error("❌ .main-text が見つからない！");
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                console.log("🔍 監視中:", entry.isIntersecting);
                if (entry.isIntersecting) {
                    textElement.classList.add("show");
                    observer.unobserve(entry.target); // 一度だけ発火
                }
            });
        },
        { rootMargin: "0px", threshold: 0.2 } // 少し見えたら発火
    );

    observer.observe(textElement);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});