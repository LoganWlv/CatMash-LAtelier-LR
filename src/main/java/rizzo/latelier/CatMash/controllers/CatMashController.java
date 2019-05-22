package rizzo.latelier.CatMash.controllers;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import rizzo.latelier.CatMash.model.RequestVoteIn;
import rizzo.latelier.CatMash.model.Vote;
import rizzo.latelier.CatMash.services.CatMashService;

@Controller
public class CatMashController {

    final String CATS_HOST = "https://latelier.co/data/cats.json";
    final String INSERT_OK_MESSAGE = "Vote well received";

    @Autowired
    CatMashService catMashService;

    @GetMapping("/search/cats")
    @ResponseBody
    public ResponseEntity<String> searchForCats() {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(CATS_HOST)).GET().build();
        HttpResponse<String> response;
        try {
            response = client.send(request, BodyHandlers.ofString());
            return ResponseEntity.ok(response.body());
        } catch (IOException | InterruptedException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/cats/votes/{userId}")
    @ResponseBody
    public ResponseEntity<String> getVotesByUser(@PathVariable String userId) {
        try {
            List<Vote> votes = catMashService.getVotesForUserId(userId);
            return ResponseEntity.ok(new Gson().toJson(votes));
        } catch (SQLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("/vote")
    public ResponseEntity<String> vote(@RequestBody RequestVoteIn voteIn) {
        try {
            catMashService.insertVote(voteIn);
        } catch (SQLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
        return ResponseEntity.ok(INSERT_OK_MESSAGE);
    }

    @GetMapping("/votes/counter")
    public ResponseEntity<String> getVoteTotalNumber() {
        try {
            Integer votesTotalNb = catMashService.getVoteTotalNumber();
            return ResponseEntity.ok(new Gson().toJson(votesTotalNb));
        } catch (SQLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/cats/votes")
    public ResponseEntity<String> getAllVotes() {
        try {
            List<Vote> votes = catMashService.getVotes();
            return ResponseEntity.ok(new Gson().toJson(votes));
        } catch (SQLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

}
