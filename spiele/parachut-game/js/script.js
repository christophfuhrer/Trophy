function start(){
    var queue;
    var stage;
    var assets = [];
    var parachuter;
    var movement_x;
    var movement_y;
    
    var wind_strength = 0;
    
    var delta_movement_x = 0;
    var delta_movement_y = 0;
    
    var score = 0;
    
   
    function preload(){
        queue = new createjs.LoadQueue(false);
        queue.addEventListener('complete', init);
        queue.loadManifest([
            {id: 'cloud_1' , src: '../assets/sprite-sheet-01.png'},
            {id: 'cloud_2' , src: '../assets/sprite-sheet-02.png'},
            {id: 'thunder_cloud' , src: '../assets/sprite-sheet-03.png'},
            {id: 'coin' , src: '../assets/sprite-sheet-04.png'},
            {id: 'zeppelin_left' , src: '../assets/sprite-sheet-05.png'},
            {id: 'plattform' , src: '../assets/sprite-sheet-06.png'},
            {id: 'zeppelin_right' , src: '../assets/sprite-sheet-07.png'},
            {id: 'parachuter' , src: '../assets/sprite-sheet-08.png'},
            {id: 'plane' , src: '../assets/sprite-sheet-09.png'},
            {id: 'burnt_parachuter' , src: '../assets/sprite-sheet-10.png'}
        ]);
        loadSound();
    }
    
    function drawAsset(x, y, scale_x, scale_y, preload_id){
        var asset = new createjs.Bitmap(queue.getResult(preload_id));
        asset.scaleX = scale_x;
        asset.scaleY = scale_y;
        asset.x = x;
        asset.y = y;
        asset.asset_id = preload_id;
        var bounds = asset.getTransformedBounds();
        asset.height = bounds.height;
        asset.width = bounds.width;
        assets.push(asset);
        stage.addChild(asset);
        stage.update();
    }
    
    function drawParachuter(x, y, scale_x, scale_y){
        var asset = new createjs.Bitmap(queue.getResult('parachuter'));
        asset.scaleX = scale_x;
        asset.scaleY = scale_y;
        asset.x = x;
        asset.y = y;
        parachuter = asset;
        var bounds = parachuter.getTransformedBounds();
        parachuter.height = bounds.height;
        parachuter.width = bounds.width;
        stage.addChild(asset);
        stage.update();
        
    }
    
     function calculateVector(x, y){       
        return {
            time_x: x * 0.1,
            time_y: y * 0.1
        };
    }
    
    function isColliding(a, b) {
        return !(
            ((a.y + a.height) < (b.y)) ||
            (a.y > (b.y + b.height)) ||
            ((a.x + a.width) < b.x) ||
            (a.x > (b.x + b.width))
        );
    }
    
    function getAsset(asset_id){
        for(var i = 0; i < assets.length; i++){
            if(assets[i].asset_id === asset_id){
                return assets[i];
            }
        }
    }
    
    function moveParachuter(){
        var vector_times = calculateVector(movement_x, movement_y);
        var landing_plattform = getAsset('plattform');
        if(parachuter.x < 1000){
            parachuter.x += vector_times.time_x + delta_movement_x + wind_strength;
        }
        
        if(parachuter.y <= (landing_plattform.y - landing_plattform.height) || (parachuter.x < landing_plattform.x || parachuter.x >                 (landing_plattform.height + landing_plattform.x))){
            parachuter.y += vector_times.time_y + delta_movement_y;
        }
        
        
        if((parachuter.y + parachuter.height) > (landing_plattform.y)){
            if(parachuter.x > landing_plattform.x && parachuter.x < (landing_plattform.x + landing_plattform.width)){
                console.log('Gewonnen');
                createjs.Ticker.removeEventListener('tick', moveParachuter);
                createjs.Ticker.removeEventListener('tick', checkCollision);
                window.removeEventListener('keydown', movementParachuter);
                
                
            }else{
                console.log('Verloren');
                createjs.Ticker.removeEventListener('tick', moveParachuter);
                createjs.Ticker.removeEventListener('tick', checkCollision);
                window.removeEventListener('keydown', movementParachuter);
                
                stage.clear();
            }
        }
        
        
    }
    
    function checkMovement(mvmt, mvmt_number){
        if(mvmt_number > 0){
            if(mvmt < mvmt_number){
                return (mvmt + (mvmt_number / 10));
            }else{
                return mvmt_number;
            }
        }else{
            if(mvmt > mvmt_number){
                return (mvmt + (mvmt_number / 10));
            }else{
                return mvmt_number;
            }
        }
    }
    
    function movementParachuter(e){
        switch(e.keyCode){
            case 37:
                delta_movement_x = checkMovement(delta_movement_x, -0.1);
            break;
            case 38:
                delta_movement_y = checkMovement(delta_movement_y, -0.1);
            break;
            case 39:
                delta_movement_x = checkMovement(delta_movement_x, 0.2);
            break;
            case 40:
                delta_movement_y = checkMovement(delta_movement_y, 0.1);
            break;
        }
        parachuter.rotation = delta_movement_x * 75;

    }
    
    function fallParachuter(){
        getAsset('burnt_parachuter').y += 2
    }
    
    function loadSound(){
        createjs.Sound.registerSound('../assets/coin-sound.mp3', 'coin_sound');
        createjs.Sound.volume = 0.5;
    }
    
    function playSound(soundId){
        createjs.Sound.play(soundId);
    }
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function generateWind(){
        return calculateVector(
            Math.floor(getRandomArbitrary(1,10))
        );
    }
    
    function moveObjects(){
        for(var i = 0; i < assets.length; i++){
            var current_asset = assets[i];
            var time = getRandomArbitrary(10000,20000);
            var start_point = current_asset.x;
            var end_point = Math.random() > 0.5 ? 800 : 0;
            if(current_asset.asset_id !== 'plattform' && current_asset.asset_id !== 'burnt_parachuter' && current_asset.asset_id !==                'plane'){
                createjs.Tween.get(current_asset, {loop: true})
                .to({x: end_point}, 
                    time, 
                    createjs.Ease.getPowInOut(2))
                .to({x: start_point},
                   time,
                   createjs.Ease.getPowInOut(2));
            }else if(current_asset.asset_id === 'plane'){
                createjs.Tween.get(current_asset)
                .to({x: (1000 + current_asset.width)},
                   time);
            }

            
        }
    }
    
    function checkCollision(){
        for(var i = 0; i < assets.length; i++){
            if(isColliding(parachuter, assets[i])){
                switch(assets[i].asset_id){
                    case 'thunder_cloud':
                        parachuter.visible = false;
                        createjs.Ticker.addEventListener('tick', fallParachuter);
                        drawAsset(parachuter.x, parachuter.y, parachuter.scaleX, parachuter.scaleY, 'burnt_parachuter');
                    case 'zeppelin_left':
                    case 'zeppelin_right':
                        createjs.Ticker.removeEventListener('tick', moveParachuter);
                        createjs.Ticker.removeEventListener('tick', checkCollision);
                        window.removeEventListener('keydown', movementParachuter);
                    break;
                    case 'coin':
                        assets[i].visible = false;
                        assets.splice(i,1);
                        score++;
                        playSound('coin_sound');
                    break;
                    default:
                        
                    break;    
                }

            }
        }
    }
    
    function placeAssets(placed_assets){
        for(var i = 0; i < placed_assets.length; i++){
            var current_asset = placed_assets[i];
            var start_x = getRandomArbitrary(100 , 900);
            var start_y = getRandomArbitrary(100, 400);
            drawAsset(start_x, start_y, current_asset.scale_x, current_asset.scale_y, current_asset.asset_id);
        }
    }
    
    
    /*
    * Initialisierungsfunktion des Spiels
    */
    function init(){
        stage = new createjs.Stage(document.getElementById('canvas'));
        wind_strength = generateWind().time_x;
        drawAsset(700,540,0.3,0.3,'plattform');
        drawAsset(-235,-60,0.3,0.3,'plane');
        drawParachuter(20,20,0.2,0.2);
        
        placeAssets([
            {
                asset_id: 'cloud_1',
                scale_x: getRandomArbitrary(0.3, 0.4),
                scale_y: getRandomArbitrary(0.3, 0.4)
            },
            {
                asset_id: 'cloud_2',
                scale_x: getRandomArbitrary(0.3, 0.4),
                scale_y: getRandomArbitrary(0.3, 0.4)
            },
            {
                asset_id: 'thunder_cloud',
                scale: 0.3,
                scale_x: 0.25,
                scale_y: 0.25
            },
            {
                asset_id: 'coin',
                scale_x: 0.3,
                scale_y: 0.3
            },
            {
                asset_id: 'coin',
                scale_x: 0.3,
                scale_y: 0.3
            },
            {
                asset_id: 'coin',
                scale_x: 0.3,
                scale_y: 0.3
            },
            {
                asset_id: 'coin',
                scale_x: 0.3,
                scale_y: 0.3
            },
            
        ]);
        
        moveObjects();
        
        movement_x = 2;
        movement_y = 2;
        moveParachuter();
        
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener('tick', stage);
        createjs.Ticker.addEventListener('tick', moveParachuter);
        createjs.Ticker.addEventListener('tick', checkCollision);
        window.addEventListener('keydown', movementParachuter);
    }	
    
    preload();
}

window.addEventListener('load', start, false);