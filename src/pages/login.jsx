import { h, Component, render, } from "preact";
import { useState, useEffect  } from 'preact/hooks';
import htm from "htm";
import Page from "../utils/page";

const LoginForm = () => {
	const [codeImg, setCodeImg] = useState("");

	useEffect(()=>{
		setCodeImg(`/validateCodeAction.do?random=${Math.random()}`);
	}, [])

	return (
		<form method="post" name="loginForm" action="/loginAction.do">
			<input type="hidden" name="zjh1" />
			<input type="hidden" name="tips" />
			<input type="hidden" name="lx" />
			<input type="hidden" name="evalue" />
			<input type="hidden" name="eflag" />
			<input type="hidden" name="fs" />
			<input type="hidden" name="dzslh"></input>
			<input
				type="text"
				name="zjh"
				value=""
				class="input01"
				title="帐号"
				alt="notnull"
			></input>
			<input
				type="password"
				name="mm"
				value=""
				class="input01"
				title="密码"
				alt="notnull"
			></input>
			<input
				type="text"
				name="v_yzm"
				size="4"
				title="验证码"
				alt="notnull"
			></input>
			<img
				src={codeImg}
				height="20"
				width="80"
				id="vchart"
			></img>
			<input
				type="image"
				name=""
				src="/img/zh/login.gif"
				border="0"
				onClick={() => {
					login();
				}}
				class="buttonImg"
				title="登录"
			></input>
			<input
				type="image"
				name=""
				src="/img/zh/reset.gif"
				border="0"
				onClick={() => {
					document.loginForm.submit();
				}}
				class="buttonImg"
				title="重设"
			></input>
		</form>
	);
};

class LoginPage extends Page {
	constructor() {
		super();
		this.url = "/login";
		this.title = "Login";
		this.content = "Login Page";
		this.mixOriginalPage()
		this.injectNewPage();
	}

	mixOriginalPage(){
		this.originalPage.getElementsByTagName("form").item(0).name = "_loginForm"
	}

	injectNewPage() {
		render(
			<main>
				<LoginForm />
			</main>,
			document.body
		);
	}
}

export default LoginPage;
