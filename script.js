// 12명의 영웅과 각 영웅별 20개의 특성
const heroes = [
    {
        name: '디바', src: 'hero_icon/dva.png', traits: [
            { src: 'trait_icon/dva_1.jpg', tier: 1 }, { src: 'trait_icon/dva_2.jpg', tier: 1 }, { src: 'trait_icon/dva_3.jpg', tier: 1 }, { src: 'trait_icon/dva_4.jpg', tier: 1 },
            { src: 'trait_icon/dva_5.jpg', tier: 1 }, { src: 'trait_icon/dva_6.jpg', tier: 2 }, { src: 'trait_icon/dva_7.jpg', tier: 2 }, { src: 'trait_icon/dva_8.jpg', tier: 2 },
            { src: 'trait_icon/dva_9.jpg', tier: 2 }, { src: 'trait_icon/dva_10.jpg', tier: 3 }, { src: 'trait_icon/dva_11.jpg', tier: 3 }, { src: 'trait_icon/dva_12.jpg', tier: 3 },
            { src: 'trait_icon/dva_13.jpg', tier: 3 }, { src: 'trait_icon/dva_14.jpg', tier: 3 }, { src: 'trait_icon/dva_15.jpg', tier: 3 }, { src: 'trait_icon/dva_16.jpg', tier: 4 },
            { src: 'trait_icon/dva_17.jpg', tier: 4 }, { src: 'trait_icon/dva_18.jpg', tier: 4 }, { src: 'trait_icon/dva_19.jpg', tier: 4 }, { src: 'trait_icon/dva_20.jpg', tier: 4 }]
    },{
        name: '라인하르트', src: 'hero_icon/reinhardt.png', traits: [
            { src: 'trait_icon/reinhardt_1.jpg', tier: 1 }, { src: 'trait_icon/reinhardt_2.jpg', tier: 1 }, { src: 'trait_icon/reinhardt_3.jpg', tier: 1 }, { src: 'trait_icon/reinhardt_4.jpg', tier: 1 },
            { src: 'trait_icon/reinhardt_5.jpg', tier: 1 }, { src: 'trait_icon/reinhardt_6.jpg', tier: 2 }, { src: 'trait_icon/reinhardt_7.jpg', tier: 2 }, { src: 'trait_icon/reinhardt_8.jpg', tier: 2 },
            { src: 'trait_icon/reinhardt_9.jpg', tier: 2 }, { src: 'trait_icon/reinhardt_10.jpg', tier: 3 }, { src: 'trait_icon/reinhardt_11.jpg', tier: 3 }, { src: 'trait_icon/reinhardt_12.jpg', tier: 3 },
            { src: 'trait_icon/reinhardt_13.jpg', tier: 3 }, { src: 'trait_icon/reinhardt_14.jpg', tier: 3 }, { src: 'trait_icon/reinhardt_15.jpg', tier: 3 }, { src: 'trait_icon/reinhardt_16.jpg', tier: 4 },
            { src: 'trait_icon/reinhardt_17.jpg', tier: 4 }, { src: 'trait_icon/reinhardt_18.jpg', tier: 4 }, { src: 'trait_icon/reinhardt_19.jpg', tier: 4 }, { src: 'trait_icon/reinhardt_20.jpg', tier: 4 }]
    },{
        name: '오리사', src: 'hero_icon/orisa.png', traits: [
            { src: 'trait_icon/orisa_1.jpg', tier: 1 }, { src: 'trait_icon/orisa_2.jpg', tier: 1 }, { src: 'trait_icon/orisa_3.jpg', tier: 1 }, { src: 'trait_icon/orisa_4.jpg', tier: 1 },
            { src: 'trait_icon/orisa_5.jpg', tier: 1 }, { src: 'trait_icon/orisa_6.jpg', tier: 2 }, { src: 'trait_icon/orisa_7.jpg', tier: 2 }, { src: 'trait_icon/orisa_8.jpg', tier: 2 },
            { src: 'trait_icon/orisa_9.jpg', tier: 2 }, { src: 'trait_icon/orisa_10.jpg', tier: 3 }, { src: 'trait_icon/orisa_11.jpg', tier: 3 }, { src: 'trait_icon/orisa_12.jpg', tier: 3 },
            { src: 'trait_icon/orisa_13.jpg', tier: 3 }, { src: 'trait_icon/orisa_14.jpg', tier: 3 }, { src: 'trait_icon/orisa_15.jpg', tier: 3 }, { src: 'trait_icon/orisa_16.jpg', tier: 4 },
            { src: 'trait_icon/orisa_17.jpg', tier: 4 }, { src: 'trait_icon/orisa_18.jpg', tier: 4 }, { src: 'trait_icon/orisa_19.jpg', tier: 4 }, { src: 'trait_icon/orisa_20.jpg', tier: 4 }]
    },{
        name: '겐지', src: 'hero_icon/genji.png', traits: [
            { src: 'trait_icon/genji_1.jpg', tier: 1 }, { src: 'trait_icon/genji_2.jpg', tier: 1 }, { src: 'trait_icon/genji_3.jpg', tier: 1 }, { src: 'trait_icon/genji_4.jpg', tier: 1 },
            { src: 'trait_icon/genji_5.jpg', tier: 1 }, { src: 'trait_icon/genji_6.jpg', tier: 2 }, { src: 'trait_icon/genji_7.jpg', tier: 2 }, { src: 'trait_icon/genji_8.jpg', tier: 2 },
            { src: 'trait_icon/genji_9.jpg', tier: 2 }, { src: 'trait_icon/genji_10.jpg', tier: 3 }, { src: 'trait_icon/genji_11.jpg', tier: 3 }, { src: 'trait_icon/genji_12.jpg', tier: 3 },
            { src: 'trait_icon/genji_13.jpg', tier: 3 }, { src: 'trait_icon/genji_14.jpg', tier: 3 }, { src: 'trait_icon/genji_15.jpg', tier: 3 }, { src: 'trait_icon/genji_16.jpg', tier: 4 },
            { src: 'trait_icon/genji_17.jpg', tier: 4 }, { src: 'trait_icon/genji_18.jpg', tier: 4 }, { src: 'trait_icon/genji_19.jpg', tier: 4 }, { src: 'trait_icon/genji_20.jpg', tier: 4 }]
    },{
        name: '리퍼', src: 'hero_icon/reaper.png', traits: [
            { src: 'trait_icon/reaper_1.jpg', tier: 1 }, { src: 'trait_icon/reaper_2.jpg', tier: 1 }, { src: 'trait_icon/reaper_3.jpg', tier: 1 }, { src: 'trait_icon/reaper_4.jpg', tier: 1 },
            { src: 'trait_icon/reaper_5.jpg', tier: 1 }, { src: 'trait_icon/reaper_6.jpg', tier: 2 }, { src: 'trait_icon/reaper_7.jpg', tier: 2 }, { src: 'trait_icon/reaper_8.jpg', tier: 2 },
            { src: 'trait_icon/reaper_9.jpg', tier: 2 }, { src: 'trait_icon/reaper_10.jpg', tier: 3 }, { src: 'trait_icon/reaper_11.jpg', tier: 3 }, { src: 'trait_icon/reaper_12.jpg', tier: 3 },
            { src: 'trait_icon/reaper_13.jpg', tier: 3 }, { src: 'trait_icon/reaper_14.jpg', tier: 3 }, { src: 'trait_icon/reaper_15.jpg', tier: 3 }, { src: 'trait_icon/reaper_16.jpg', tier: 4 },
            { src: 'trait_icon/reaper_17.jpg', tier: 4 }, { src: 'trait_icon/reaper_18.jpg', tier: 4 }, { src: 'trait_icon/reaper_19.jpg', tier: 4 }, { src: 'trait_icon/reaper_20.jpg', tier: 4 }]
    },{
        name: '솔저', src: 'hero_icon/soldier.png', traits: [
            { src: 'trait_icon/soldier_1.jpg', tier: 1 }, { src: 'trait_icon/soldier_2.jpg', tier: 1 }, { src: 'trait_icon/soldier_3.jpg', tier: 1 }, { src: 'trait_icon/soldier_4.jpg', tier: 1 },
            { src: 'trait_icon/soldier_5.jpg', tier: 1 }, { src: 'trait_icon/soldier_6.jpg', tier: 2 }, { src: 'trait_icon/soldier_7.jpg', tier: 2 }, { src: 'trait_icon/soldier_8.jpg', tier: 2 },
            { src: 'trait_icon/soldier_9.jpg', tier: 2 }, { src: 'trait_icon/soldier_10.jpg', tier: 3 }, { src: 'trait_icon/soldier_11.jpg', tier: 3 }, { src: 'trait_icon/soldier_12.jpg', tier: 3 },
            { src: 'trait_icon/soldier_13.jpg', tier: 3 }, { src: 'trait_icon/soldier_14.jpg', tier: 3 }, { src: 'trait_icon/soldier_15.jpg', tier: 3 }, { src: 'trait_icon/soldier_16.jpg', tier: 4 },
            { src: 'trait_icon/soldier_17.jpg', tier: 4 }, { src: 'trait_icon/soldier_18.jpg', tier: 4 }, { src: 'trait_icon/soldier_19.jpg', tier: 4 }, { src: 'trait_icon/soldier_20.jpg', tier: 4 }]
    },{
        name: '애쉬', src: 'hero_icon/ashe.png', traits: [
            { src: 'trait_icon/ashe_1.jpg', tier: 1 }, { src: 'trait_icon/ashe_2.jpg', tier: 1 }, { src: 'trait_icon/ashe_3.jpg', tier: 1 }, { src: 'trait_icon/ashe_4.jpg', tier: 1 },
            { src: 'trait_icon/ashe_5.jpg', tier: 1 }, { src: 'trait_icon/ashe_6.jpg', tier: 2 }, { src: 'trait_icon/ashe_7.jpg', tier: 2 }, { src: 'trait_icon/ashe_8.jpg', tier: 2 },
            { src: 'trait_icon/ashe_9.jpg', tier: 2 }, { src: 'trait_icon/ashe_10.jpg', tier: 3 }, { src: 'trait_icon/ashe_11.jpg', tier: 3 }, { src: 'trait_icon/ashe_12.jpg', tier: 3 },
            { src: 'trait_icon/ashe_13.jpg', tier: 3 }, { src: 'trait_icon/ashe_14.jpg', tier: 3 }, { src: 'trait_icon/ashe_15.jpg', tier: 3 }, { src: 'trait_icon/ashe_16.jpg', tier: 4 },
            { src: 'trait_icon/ashe_17.jpg', tier: 4 }, { src: 'trait_icon/ashe_18.jpg', tier: 4 }, { src: 'trait_icon/ashe_19.jpg', tier: 4 }, { src: 'trait_icon/ashe_20.jpg', tier: 4 }]
    },{
        name: '파라', src: 'hero_icon/pharah.png', traits: [
            { src: 'trait_icon/pharah_1.jpg', tier: 1 }, { src: 'trait_icon/pharah_2.jpg', tier: 1 }, { src: 'trait_icon/pharah_3.jpg', tier: 1 }, { src: 'trait_icon/pharah_4.jpg', tier: 1 },
            { src: 'trait_icon/pharah_5.jpg', tier: 1 }, { src: 'trait_icon/pharah_6.jpg', tier: 2 }, { src: 'trait_icon/pharah_7.jpg', tier: 2 }, { src: 'trait_icon/pharah_8.jpg', tier: 2 },
            { src: 'trait_icon/pharah_9.jpg', tier: 2 }, { src: 'trait_icon/pharah_10.jpg', tier: 3 }, { src: 'trait_icon/pharah_11.jpg', tier: 3 }, { src: 'trait_icon/pharah_12.jpg', tier: 3 },
            { src: 'trait_icon/pharah_13.jpg', tier: 3 }, { src: 'trait_icon/pharah_14.jpg', tier: 3 }, { src: 'trait_icon/pharah_15.jpg', tier: 3 }, { src: 'trait_icon/pharah_16.jpg', tier: 4 },
            { src: 'trait_icon/pharah_17.jpg', tier: 4 }, { src: 'trait_icon/pharah_18.jpg', tier: 4 }, { src: 'trait_icon/pharah_19.jpg', tier: 4 }, { src: 'trait_icon/pharah_20.jpg', tier: 4 }]
    },{
        name: '메르시', src: 'hero_icon/mercy.png', traits: [
            { src: 'trait_icon/mercy_1.jpg', tier: 1 }, { src: 'trait_icon/mercy_2.jpg', tier: 1 }, { src: 'trait_icon/mercy_3.jpg', tier: 1 }, { src: 'trait_icon/mercy_4.jpg', tier: 1 },
            { src: 'trait_icon/mercy_5.jpg', tier: 1 }, { src: 'trait_icon/mercy_6.jpg', tier: 2 }, { src: 'trait_icon/mercy_7.jpg', tier: 2 }, { src: 'trait_icon/mercy_8.jpg', tier: 2 },
            { src: 'trait_icon/mercy_9.jpg', tier: 2 }, { src: 'trait_icon/mercy_10.jpg', tier: 3 }, { src: 'trait_icon/mercy_11.jpg', tier: 3 }, { src: 'trait_icon/mercy_12.jpg', tier: 3 },
            { src: 'trait_icon/mercy_13.jpg', tier: 3 }, { src: 'trait_icon/mercy_14.jpg', tier: 3 }, { src: 'trait_icon/mercy_15.jpg', tier: 3 }, { src: 'trait_icon/mercy_16.jpg', tier: 4 },
            { src: 'trait_icon/mercy_17.jpg', tier: 4 }, { src: 'trait_icon/mercy_18.jpg', tier: 4 }, { src: 'trait_icon/mercy_19.jpg', tier: 4 }, { src: 'trait_icon/mercy_20.jpg', tier: 4 }]
    },{
        name: '모이라', src: 'hero_icon/moira.png', traits: [
            { src: 'trait_icon/moira_1.jpg', tier: 1 }, { src: 'trait_icon/moira_2.jpg', tier: 1 }, { src: 'trait_icon/moira_3.jpg', tier: 1 }, { src: 'trait_icon/moira_4.jpg', tier: 1 },
            { src: 'trait_icon/moira_5.jpg', tier: 1 }, { src: 'trait_icon/moira_6.jpg', tier: 2 }, { src: 'trait_icon/moira_7.jpg', tier: 2 }, { src: 'trait_icon/moira_8.jpg', tier: 2 },
            { src: 'trait_icon/moira_9.jpg', tier: 2 }, { src: 'trait_icon/moira_10.jpg', tier: 3 }, { src: 'trait_icon/moira_11.jpg', tier: 3 }, { src: 'trait_icon/moira_12.jpg', tier: 3 },
            { src: 'trait_icon/moira_13.jpg', tier: 3 }, { src: 'trait_icon/moira_14.jpg', tier: 3 }, { src: 'trait_icon/moira_15.jpg', tier: 3 }, { src: 'trait_icon/moira_16.jpg', tier: 4 },
            { src: 'trait_icon/moira_17.jpg', tier: 4 }, { src: 'trait_icon/moira_18.jpg', tier: 4 }, { src: 'trait_icon/moira_19.jpg', tier: 4 }, { src: 'trait_icon/moira_20.jpg', tier: 4 }]
    },{
        name: '젠야타', src: 'hero_icon/zenyatta.png', traits: [
            { src: 'trait_icon/zenyatta_1.jpg', tier: 1 }, { src: 'trait_icon/zenyatta_2.jpg', tier: 1 }, { src: 'trait_icon/zenyatta_3.jpg', tier: 1 }, { src: 'trait_icon/zenyatta_4.jpg', tier: 1 },
            { src: 'trait_icon/zenyatta_5.jpg', tier: 1 }, { src: 'trait_icon/zenyatta_6.jpg', tier: 2 }, { src: 'trait_icon/zenyatta_7.jpg', tier: 2 }, { src: 'trait_icon/zenyatta_8.jpg', tier: 2 },
            { src: 'trait_icon/zenyatta_9.jpg', tier: 2 }, { src: 'trait_icon/zenyatta_10.jpg', tier: 3 }, { src: 'trait_icon/zenyatta_11.jpg', tier: 3 }, { src: 'trait_icon/zenyatta_12.jpg', tier: 3 },
            { src: 'trait_icon/zenyatta_13.jpg', tier: 3 }, { src: 'trait_icon/zenyatta_14.jpg', tier: 3 }, { src: 'trait_icon/zenyatta_15.jpg', tier: 3 }, { src: 'trait_icon/zenyatta_16.jpg', tier: 4 },
            { src: 'trait_icon/zenyatta_17.jpg', tier: 4 }, { src: 'trait_icon/zenyatta_18.jpg', tier: 4 }, { src: 'trait_icon/zenyatta_19.jpg', tier: 4 }, { src: 'trait_icon/zenyatta_20.jpg', tier: 4 }]
    },{
        name: '키리코', src: 'hero_icon/kiriko.png', traits: [
            { src: 'trait_icon/kiriko_1.jpg', tier: 1 }, { src: 'trait_icon/kiriko_2.jpg', tier: 1 }, { src: 'trait_icon/kiriko_3.jpg', tier: 1 }, { src: 'trait_icon/kiriko_4.jpg', tier: 1 },
            { src: 'trait_icon/kiriko_5.jpg', tier: 1 }, { src: 'trait_icon/kiriko_6.jpg', tier: 2 }, { src: 'trait_icon/kiriko_7.jpg', tier: 2 }, { src: 'trait_icon/kiriko_8.jpg', tier: 2 },
            { src: 'trait_icon/kiriko_9.jpg', tier: 2 }, { src: 'trait_icon/kiriko_10.jpg', tier: 3 }, { src: 'trait_icon/kiriko_11.jpg', tier: 3 }, { src: 'trait_icon/kiriko_12.jpg', tier: 3 },
            { src: 'trait_icon/kiriko_13.jpg', tier: 3 }, { src: 'trait_icon/kiriko_14.jpg', tier: 3 }, { src: 'trait_icon/kiriko_15.jpg', tier: 3 }, { src: 'trait_icon/kiriko_16.jpg', tier: 4 },
            { src: 'trait_icon/kiriko_17.jpg', tier: 4 }, { src: 'trait_icon/kiriko_18.jpg', tier: 4 }, { src: 'trait_icon/kiriko_19.jpg', tier: 4 }, { src: 'trait_icon/kiriko_20.jpg', tier: 4 }]
    }
];

let selectedHero = null;
let round = 1;
let selectedTraits = []; // 위쪽에서 선택된 특성
let confirmedTraits = []; // 아래쪽에서 확정된 특성

// 라운드별 단계 확률 설정 (5라운드 기준) (1단계, 2단계, 3단계, 4단계)
const roundProbabilities = [
    [66, 34, 0, 0],
    [40, 40, 20, 0],
    [0, 50, 40, 10],
    [0, 0, 60, 40],
    [0, 0, 45, 55]
];

// 영웅 선택 화면에만 영웅 이미지를 표시
function displayHeroes() {
    const heroOptions = document.getElementById('hero-options');
    heroOptions.innerHTML = ''; // 기존 내용을 비움

    heroes.forEach(hero => {
        const img = document.createElement('img');
        img.src = hero.src; // 영웅의 이미지 경로
        img.alt = hero.name; // 이미지 설명
        img.classList.add('hero-image');
        img.onclick = () => selectHero(hero.name); // hero.name을 전달
        heroOptions.appendChild(img);
    });
}

function selectHero(heroName) {
    // 선택된 영웅 객체를 heroes 배열에서 찾기
    selectedHero = heroes.find(hero => hero.name === heroName);
    
    if (selectedHero) { // 영웅이 제대로 선택되었는지 확인
        // 화면 표시 업데이트
        document.getElementById('hero-selection').style.display = 'none';
        document.getElementById('trait-selection').style.display = 'block';
        
        // 선택된 영웅의 특성을 표시
        displayTraits();
    } else {
        console.error("Hero not found!"); // 영웅이 존재하지 않을 경우 오류 메시지
    }
}

// 현재 라운드의 확률에 따라 무작위로 특성 선택
function getRandomTraits(availableTraits) {
    const probabilities = roundProbabilities[round - 1]; // 현재 라운드의 확률 가져오기
    const filteredTraits = [];

    // 각 확률에 따라 단계별로 특성을 추가
    probabilities.forEach((probability, tier) => {
        const tierTraits = availableTraits.filter(trait => trait.tier === tier + 1); // 해당 티어의 특성 필터링
        const count = Math.floor(probability / 10); // 확률을 10으로 나누어 각 특성을 추가할 횟수 계산
        for (let i = 0; i < count; i++) {
            if (tierTraits.length > 0) {
                const randomIndex = Math.floor(Math.random() * tierTraits.length);
                filteredTraits.push(tierTraits[randomIndex]); // 랜덤으로 특성 추가
                tierTraits.splice(randomIndex, 1); // 추가한 특성은 리스트에서 제거
            }
        }
    });

    // 최종 선택할 특성
    const selectedTraits = [];
    while (selectedTraits.length < 4 && filteredTraits.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredTraits.length);
        const trait = filteredTraits[randomIndex];
        if (!selectedTraits.includes(trait)) {
            selectedTraits.push(trait); // 중복 체크 후 특성 추가
        }
        filteredTraits.splice(randomIndex, 1); // 선택된 특성은 filteredTraits에서 제거
    }
    
    return selectedTraits;
}

// displayTraits()와 trait-image 클래스에서 trait-large 클래스 추가
function displayTraits() {
    const traitOptions = document.getElementById('trait-options');
    traitOptions.innerHTML = '';

    // 사용자가 선택한 특성과 확정된 특성을 제외한 특성 목록 생성
    const availableTraits = selectedHero.traits.filter(trait => 
        !selectedTraits.includes(trait) && !confirmedTraits.includes(trait)
    );

    const randomTraits = getRandomTraits(availableTraits);

    randomTraits.forEach(trait => {
        const img = document.createElement('img');
        img.src = trait.src;
        img.alt = `Tier ${trait.tier}`;
        img.classList.add('trait-image');
        img.classList.add('trait-large');
        img.onclick = () => toggleSelection(img, trait);
        traitOptions.appendChild(img);
    });
}


function toggleSelection(img, trait) {
    if (img.classList.contains('selected')) {
        img.classList.remove('selected');
        selectedTraits = selectedTraits.filter(t => t.src !== trait.src);
    } else {
        const totalSelected = selectedTraits.length + confirmedTraits.length; // 선택된 특성과 확정된 특성의 총합
        const requiredSelectionCount = round + 1; // 각 라운드마다 선택해야 하는 특성 수
        if (totalSelected < requiredSelectionCount) {
            img.classList.add('selected');
            selectedTraits.push(trait); // 선택된 특성 배열에 추가
        } else {
            alert(`현재 라운드에서 ${requiredSelectionCount}개 까지만 선택할 수 있습니다!`);
        }
    }
}


function autoSelectTraits() {
    const requiredSelectionCount = round + 1; // 각 라운드마다 선택해야 하는 특성 수
    while (selectedTraits.length + confirmedTraits.length < requiredSelectionCount) {
        const availableTraits = Array.from(document.querySelectorAll('.trait-image:not(.selected)'));
        if (availableTraits.length === 0) break; // 더 이상 선택할 특성이 없으면 종료
        const nextTrait = availableTraits[0]; // 왼쪽부터 자동으로 선택
        nextTrait.click(); // 클릭 이벤트 트리거
    }
}

function confirmSelection() {
    const requiredSelectionCount = round + 1; // 각 라운드마다 선택해야 하는 특성 수
    if (selectedTraits.length + confirmedTraits.length < requiredSelectionCount) {
        autoSelectTraits(); // 선택하지 않은 특성이 있으면 자동 선택
    }

    // 확정된 특성 목록 업데이트
    confirmedTraits = confirmedTraits.concat(selectedTraits); // 선택된 특성을 확정된 특성으로 업데이트
    selectedTraits = []; // 선택된 특성 배열 초기화

    // UI 업데이트
    const selectedContainer = document.getElementById('selected-traits');
    selectedContainer.innerHTML = ''; // 기존 내용을 비움

    confirmedTraits.forEach(trait => {
        const traitItem = document.createElement('div');
        traitItem.classList.add('trait-item');

        const img = document.createElement('img');
        img.src = trait.src;
        img.alt = `Tier ${trait.tier}`;
        img.classList.add('trait-image');
        traitItem.appendChild(img);

        // 제거 버튼 생성
        const removeButton = document.createElement('button');
        removeButton.innerText = '제거';
        removeButton.onclick = () => removeTrait(trait); // 특성 제거 함수 호출
        traitItem.appendChild(removeButton);

        selectedContainer.appendChild(traitItem);
    });

    // 현재 라운드가 5보다 작을 경우
    if (round < 5) {
        round++;
        document.getElementById('round-number').innerText = round;
        canRemoveTrait = true;
        displayTraits(); // 새로운 특성을 표시
    } else {
        alert("시뮬레이션 완료!");
        document.getElementById('confirm-button').disabled = true; // 선택 확정 버튼 비활성화
    }
}



let canRemoveTrait = true; // 특성 제거 가능 여부를 나타내는 플래그

// 특성 제거 함수
function removeTrait(trait) {
    if (canRemoveTrait) { // 제거가 가능할 경우에만 실행
        const index = confirmedTraits.findIndex(t => t.src === trait.src);
        if (index !== -1) {
            confirmedTraits.splice(index, 1); // 확정된 특성 목록에서 제거
            updateRemovedTraitUI(); // UI 업데이트
            canRemoveTrait = false; // 제거 후 플래그 비활성화
        }
    } else {
        alert("이번 라운드에서 이미 특성을 한 번 제거했습니다."); // 알림
    }
}


function updateConfirmedTraitsUI() {
    const selectedContainer = document.getElementById('selected-traits');
    selectedContainer.innerHTML = ''; // 기존 내용을 비움

    // 확정된 특성 UI 업데이트
    confirmedTraits.forEach(trait => {
        const traitItem = document.createElement('div');
        traitItem.classList.add('trait-item');

        const img = document.createElement('img');
        img.src = trait.src;
        img.alt = `Tier ${trait.tier}`;
        img.classList.add('trait-image');
        traitItem.appendChild(img);

        // 제거 버튼 생성
        const removeButton = document.createElement('button');
        removeButton.innerText = '제거';
        removeButton.onclick = () => removeTrait(trait); // 특성 제거 함수 호출
        traitItem.appendChild(removeButton);

        selectedContainer.appendChild(traitItem);
    });
}

// 선택한 특성을 UI에 표시하는 함수
function updateSelectedTraitsUI() {
    const selectedContainer = document.getElementById('selected-traits');
    selectedContainer.innerHTML = ''; // 현재 선택된 특성 내용 초기화
    selectedTraits.forEach((trait, index) => {
        const imgContainer = document.createElement('div'); // 이미지와 버튼을 담을 div 생성
        const img = document.createElement('img');
        img.src = trait.src;
        img.alt = `Tier ${trait.tier}`;
        img.classList.add('trait-image');

        const removeButton = document.createElement('button'); // 제거 버튼 생성
        removeButton.innerText = '제거';
        removeButton.onclick = () => removeTrait(index); // 클릭 시 해당 특성 제거

        imgContainer.appendChild(img); // 이미지 추가
        imgContainer.appendChild(removeButton); // 버튼 추가
        selectedContainer.appendChild(imgContainer); // div를 선택된 특성 컨테이너에 추가
    });
}

function resetSimulation() {
    // 초기화 작업
    selectedHero = null; // 선택한 영웅 초기화
    selectedTraits = []; // 선택한 특성 초기화
    confirmedTraits = [];
    round = 1; // 라운드 초기화

    // 화면 업데이트
    document.getElementById('hero-selection').style.display = 'block'; // 영웅 선택 화면 표시
    document.getElementById('trait-selection').style.display = 'none'; // 특성 선택 화면 숨기기
    document.getElementById('selected-traits').innerHTML = ''; // 선택한 특성 목록 초기화
    document.getElementById('round-number').innerText = round; // 라운드 번호 초기화
    canRemoveTrait = true;
    document.getElementById('confirm-button').disabled = false;
    // 영웅과 특성 표시
    displayHeroes(); // 영웅 리스트 다시 표시
}

// 제거된 특성을 위한 UI 업데이트 함수
function updateRemovedTraitUI() {
    const selectedContainer = document.getElementById('selected-traits');
    selectedContainer.innerHTML = ''; // 기존 내용을 비움

    confirmedTraits.forEach(trait => {
        const traitItem = document.createElement('div');
        traitItem.classList.add('trait-item');

        const img = document.createElement('img');
        img.src = trait.src;
        img.alt = `Tier ${trait.tier}`;
        img.classList.add('trait-image');
        traitItem.appendChild(img);

        // 제거 버튼 생성
        const removeButton = document.createElement('button');
        removeButton.innerText = '제거';
        removeButton.onclick = () => removeTrait(trait); // 특성 제거 함수 호출
        traitItem.appendChild(removeButton);

        selectedContainer.appendChild(traitItem);
    });
}



displayHeroes();
