const formTitle = document.getElementById('form-title');
    const authForm = document.getElementById('auth-form');
    const switchText = document.getElementById('switch-text');
    const switchLink = document.getElementById('switch-link');

    let isLogin = true;

    switchLink.addEventListener('click', () => {
      isLogin = !isLogin;

      if (isLogin) {
        formTitle.textContent = '로그인';
        authForm.innerHTML = `
          <input type="text" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">로그인</button>
        `;
        switchText.textContent = '회원이 아니신가요? ';
        switchLink.textContent = '회원가입';
      } else {
        formTitle.textContent = '회원가입';
        authForm.innerHTML = `
          <input type="text" placeholder="이름" required />
          <input type="text" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <input type="password" placeholder="비밀번호 확인" required />
          <button type="submit">회원가입</button>
        `;
        switchText.textContent = '이미 회원이신가요? ';
        switchLink.textContent = '로그인';
      }
    });

