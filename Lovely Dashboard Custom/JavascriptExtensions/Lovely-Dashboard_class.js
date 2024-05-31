// Setup Car Class

function ld_getCarClass(carClassName) {
    switch(carClassName) {
        case "Hosted All Cars":
            return "HAC";
            break;
        case "IMSA23":
            return "GTP";
            break;
        case "Dallara P217":
            return "LMP2";
            break;
        case "Nissan GTP":
            return "GTP";
            break;
        case "HPD ARX-01c":
            return "LMP2";
            break;
        case "Ligier JS P320":
            return "LMP3";
            break;
        case "GT1 Class":
            return "GT1";
            break;
        case "Ford GT":
            return "GT2";
            break;
        case "GT3 Class":
            return "GT3";
            break;
        case "GT4 Class":
            return "GT4";
            break;
        case "Audi 90 GTO":
            return "GTO";
            break;
        case "MX5 Cup 2016":
            return "MX5";
            break;
        case "Ferrari 488 GT3 Evo 2020":
            return "GT3";
            break;
        case "NASCAR 2022 NG":
            return "NXG";
            break;
        case "Radical SR10":
            return "SR10";
            break;
        case "SF Lights":
            return "SFL";
            break;

        // Formula 1
        case "Aston Martin":
            return "AMR";
            break;
        case "Alpine":
            return "ALP";
            break;
        case "Red Bull Racing":
            return "RBR";
            break;
        case "Alfa Romeo":
            return "ALF";
            break;
        case "Haas":
            return "HAS";
            break;
        case "Alpha Tauri":
            return "ATR";
            break;
        case "Ferrari":
            return "FER";
            break;
        case "Mercedes":
            return "MER";
            break;
        case "Williams":
            return "WIL";
            break;
        case "McLaren":
            return "MCL";
            break;
            
        case null:
            return "---";
            break;
        case "":
            return "---";
            break;
            
        default:
            return carClassName;
            break;
    }
}

function ld_getCarClassNameSize(carClassNameSize) {
    if ( carClassNameSize.length <= 3 ) {
        return 17
    } else if ( carClassNameSize.length == 4 ) {
        return 15
    } else  {
        return 13
    }
}