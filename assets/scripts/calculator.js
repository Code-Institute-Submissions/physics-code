function dilemmaZone()
{
        //Max distance vehicle travels without braking use maxDistance (md) to calculate distance from stop line
        vi = parseFloat(document.getElementById("initialVelocity").value);
        yp = parseFloat(document.getElementById("yellowPhase").value);
        ip = parseFloat(document.getElementById("interPhase").value);
        length = parseFloat(document.getElementById("length").value);
        let phase = yp + ip;
document.getElementById("phaseDistance").innerHTML = (vi * phase) - length;
        //Stopping distance - constant braking
        rt = parseFloat(document.getElementById("reactionTime").value);
        //unbraked distance travelled with reaction time - reaction distance (rd)
        let rd = rt * vi;
document.getElementById("reactionDistance").innerHTML = (rd);
        //total stopping distance including reaction distance
        mu = parseFloat(document.getElementById("friction").value);
        //initial velocity squared for calculation
        let vsqr = Math.pow(vi,2);
        let sd = ((vsqr)/(2 * mu  * 9.81) + rd);
document.getElementById("stoppingDistance").innerHTML = ((vsqr)/(2 * mu  * 9.81) + rd).toFixed(2);
        id = parseFloat(document.getElementById("intersectionDistance").value);
        //maxDistance (md) is the distance from the stop-line a vehicle can safely travel through the intersection
        let md = (vi * phase) - length - id;
        document.getElementById("maxDistance").innerHTML = (md);
        //determine if a delimma zone exists (or option zone)
        let total = md - sd 
document.getElementById("total").innerHTML = total.toFixed(2);            

}