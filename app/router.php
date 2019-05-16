<?php 

$route = empty($_GET["route"]) ? "index" : $_GET["route"];

$file = "";
$exist = searchFile($route, $file);

if($exist){
    require_once $file;
}
else{
    echo "Error 404 - Page not Found";
}

/**
 * File search function according to URL
 * @access public
 * @param String $route: complete URL
 * @return boolean
 */
function searchFile($route, &$file){
    
    $types = "/^(controller|model).*$/";
    
    $route_without_bar = rtrim($route, "/");  // Remove / (only if have)
    
    if(preg_match($types, $route_without_bar)){
        $file = $route_without_bar . ".php";
    }else{
        $file = "view/" . $route_without_bar . ".html";
    }

    if(file_exists($file)){
        return true;
    }
    return false;
};