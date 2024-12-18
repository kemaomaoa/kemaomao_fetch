// 模拟宝藏地图API

const audio = new Audio('background_music.mp3');
    audio.play();
class TreasureMap {
    static getInitialClue() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("在古老的图书馆里找到了第一个线索...");
        }, 1000);
      });
    }
  
    static decodeAncientScript(clue) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!clue) {
            reject("没有线索可以解码!");
          }
          resolve("解码成功!宝藏在一座古老的神庙中...");
        }, 1500);
      });
    }
  
    static searchTemple(location) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random();
          if (random < 0.5) {
            reject("糟糕!遇到了神庙守卫!");
          }
          resolve("找到了一个神秘的箱子...");
        }, 2000);
      });
    }
  
    static openTreasureBox() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("恭喜!你找到了传说中的宝藏!");
        }, 1000);
      });
    }
    
    static getMapFragment() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("在市场的小摊上找到了地图的一角...");
          }, 1000);
      });
  }

  static assembleMap(fragment) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (!fragment) {
                  reject("没有地图碎片可以组装!");
              }
              resolve("地图组装成功!指向了神庙的位置...");
          }, 1500);
      });
  }

  static navigateToTemple() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const random = Math.random();
              if (random < 0.5) {
                  reject("糟糕!迷失了方向!");
              }
              resolve("成功导航至神庙...");
          }, 2000);
      });
  }
  }

  async function findTreasureWithAsyncAwait() {
    try {
      const clue = await TreasureMap.getInitialClue();
      document.getElementById('clue').textContent = clue;
      const fragment = await TreasureMap.getMapFragment();
        document.getElementById('fragment').textContent = fragment;
        const assembledMap = await TreasureMap.assembleMap(fragment);
        document.getElementById('assembledMap').textContent = assembledMap;
        const location = await TreasureMap.navigateToTemple();
        document.getElementById('location').textContent = location;
        const box = await TreasureMap.searchTemple(location);
        document.getElementById('box').textContent = box;
        const treasure = await TreasureMap.openTreasureBox();
        document.getElementById('treasure').textContent = treasure;
    } catch (error) {
        console.error("任务失败:", error);
    }
}




findTreasureWithAsyncAwait();