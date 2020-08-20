function dilemmaZone()
{
        //Max distance vehicle travels without braking use maxDistance 
        vi = parseFloat(document.getElementById("initialVelocity").value);
        yp = parseFloat(document.getElementById("yellowPhase").value);
        ip = parseFloat(document.getElementById("interPhase").value);
        length = parseFloat(document.getElementById("length").value);
let phase = yp + ip;
document.getElementById("phaseDistance").innerHTML = (vi * phase) - length;
let maxDistance = (vi * phase) - length;
        //Stopping distance - constant braking
        rt = parseFloat(document.getElementById("reactionTime").value);
        //unbraked distance travelled with reaction time - reaction distance (rd)
let rd = rt * vi;
document.getElementById("reactionDistance").innerHTML = (rd);

}