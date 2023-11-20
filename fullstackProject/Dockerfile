FROM maven:3.8.4-openjdk-17-slim

COPY mvnw pom.xml ./
COPY src ./src
CMD mvn clean install -e
