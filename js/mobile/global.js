var obstacles = [];
var enemies = [];
var array = [];
var result = [];
var isLocked = false;
var player;
var unit = 100;
var cells;
var graph;
var result;
var grounSideLength = 3200;
var collisionMatrix = [];
var engine = null;
var canvas;
var cellEnemy = {};
var paused = false;
var divFps;
var globalScene;
var fullScreen = false;
var globalCamera;
var audioEnabled = false;
var enemyShooting = null;
var playerShooting = null;
var enemyMissing = null;
var enemyDeath = null;
var whizz = null;
var infiniteMode = false;
var gameStarted = false;
var respawn = false;
var kills = 0;
var randomAmmoLocations = [];
var playerDied = false;
var playerBeforeRenderFunction;
var respawnCounter = 3;
var respawnCountDownIntervalId = null;
var lastEnemyId = 0;
var newEnemiesRound = false;
var difficulty = 1;
var mouseSensitivity = 2000;
var dummyCamera;

