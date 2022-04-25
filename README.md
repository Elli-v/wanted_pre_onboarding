# 🌸 구현방법

## Toggle
![Toggle](https://user-images.githubusercontent.com/67228788/165071658-fa436bc1-ecbf-4756-a023-6555f0d8f485.gif)
핵심 요소 : 버튼을 누를 때 마다 선택된 항목이 변한다.
부가 요소 : 슬라이드 애니메이션
``` 
[props]를 통해 컴포넌츠에 값을 전달하도록 했다.
{isChecked}의 값이 true면 체크되고, false면 체크해제가 된다.
{clickToggle}을 통해 체크박스가 checked가 되는지 확인하는 이벤트이다.
```

## Tab
![Tab](https://user-images.githubusercontent.com/67228788/165077831-254ccdb8-4666-4815-9851-0b17493033f3.gif)
핵심 요소 : 버튼을 누를 때 마다 선택된 탭이 변한다.
부가 요소 : 슬라이드 애니메이션
``` 
[useState] 훅을 활용해서 버튼을 클릭하면 활성화, 비활성화 상태로 구분한다.
transition 효과를 넣어서 슬라이드처럼 보이게 했다.
```

## Slider
![Slider](https://user-images.githubusercontent.com/67228788/165080999-9c5bdea2-fbdb-4e06-8051-b77b12c7e94c.gif)
핵심 요소 : 슬라이더를 움직이면 상단의 값이 자동으로 변한다.
부가 요소 : 하단 버튼과 미려한 픽셀 매칭
``` 
{handleValue}로 슬라이드 바를 이동했을 때 상단의 값이 바뀌게 한다.
percentList를 클릭했을 때 {setValue}으로 상태값을 변경한다.
```

## Input
![Input](https://user-images.githubusercontent.com/67228788/165082632-64db699d-6952-4c1c-b1b3-2b63d91dca52.gif)
핵심 요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다
부가 요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시
부가 요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다
``` 
const checkEmail = (e) => {
  if (e[0] !== "@" && e.includes("@"))
  {
    let sp = e.split("@");
    if (sp.length >= 2 && sp[1][0] !== (".") && sp[1].includes("."))
          return true;
    else return false;
  }
  else return false;
  };
  
  이메일 양식이 맞는지 먼저 확인을 하고 onChange로 입력이 될 때마다 바로 상태를 확인한다.
  {isActive}로 true, false로 아이콘 활성화했다.
  "Invaild E-mail address." 문구 출력을 위해 onBlur를 활용했어야 했는데 방법을 잘 모르겠어서 임시로 {isActive} 상태에 따라 출력이 될 수 있도록 했다. 
  때문에 입력이 들어가지 않았을 떄도 "Invaild E-mail address."가 출력되게 되었다.
  
  useState의 true, false로 type을 password와 text로 바꿨다.
```

## Dropdown
![Dropdown](https://user-images.githubusercontent.com/67228788/165085759-3c63b2e0-c731-4242-bc4b-918f096d08d5.gif)
핵심 요소 : 드롭다운을 누르면 선택창이 펼쳐지고, 아무거나 골라 클릭하면 선택된 항목으로 변경됨
부가 요소 : 키워드 필터 기능 구현
``` 
select로 구현하는 방법이 있지만 가이드라인에 적합한 비주얼은 아니라 직접 구현하는 방식을 택했다. 
checkbox로 버튼을 누르면 박스가 생기고 없어지게 했다. 덕분에 value 바뀌어도 박스가 없어지진 않았다.. ㅜ
값을 누르면 벨류가 바뀌도록 했다.
```