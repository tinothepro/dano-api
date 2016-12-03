// This #include statement was automatically added by the Particle IDE.
#include "HC_SR04/HC_SR04.h"

int cm = 0;
int trigPin = D4;
int echoPin = D5;
int offset = 73;
int waterLevel = 0;
HC_SR04 rangeFinder = HC_SR04(trigPin, echoPin);

void setup()
{

}

void loop()
{
    cm = rangeFinder.getDistanceCM();
    waterLevel = (-1 * cm + 50);
    //Particle.publish("distance", (String) waterLevel);
    String level = String(waterLevel);
    // Trigger the integration
    Particle.publish("HackathonWaterLevel", level);
    delay(4000);
}
