FROM maven:3.9.9-eclipse-temurin-23-alpine
WORKDIR /app
COPY ./backend .

ARG DB_URL
ENV DB_URL=${DB_URL}

ARG DB_USERNAME
ENV DB_USERNAME=${DB_USERNAME}

ARG DB_PASSWORD
ENV DB_PASSWORD=${DB_PASSWORD}

RUN mvn clean package
EXPOSE 8080

ENTRYPOINT ["java","-jar","/app/target/crm-0.0.1-SNAPSHOT.jar"]