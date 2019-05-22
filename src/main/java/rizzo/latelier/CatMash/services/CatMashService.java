package rizzo.latelier.CatMash.services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import rizzo.latelier.CatMash.model.RequestVoteIn;
import rizzo.latelier.CatMash.model.Vote;

@Service
public class CatMashService {

    private String INSERT_VOTE_SQL = "INSERT INTO votes VALUES (?, ?, ?, ?)";
    private String GET_VOTES_FOR_USERID_SQL = "SELECT catId1, catId2, isFirstCatChosen FROM votes WHERE userid=?";
    private String GET_VOTES_SQL = "SELECT catId1, catId2, isFirstCatChosen FROM votes";
    private String GET_VOTES_NUMBER_SQL = "SELECT count(*) FROM votes";

    {
        try {
            Class.forName("org.sqlite.JDBC");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void insertVote(RequestVoteIn vote) throws SQLException {
        Connection connection = null;
        try {
            // create a database connection
            connection = DriverManager.getConnection("jdbc:sqlite:catmash.db");
            PreparedStatement statement = connection.prepareStatement(INSERT_VOTE_SQL);
            statement.setString(1, vote.getUserId());
            statement.setString(2, vote.getCatId1());
            statement.setString(3, vote.getCatId2());
            statement.setBoolean(4, vote.isFirstCatChosen());
            statement.executeUpdate();
        } catch (SQLException e) {
            System.err.println(e.getMessage());
            throw e;
        } finally {
            try {
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                System.err.println(e.getMessage());
            }
        }
    }

    public List<Vote> getVotesForUserId(String userId) throws SQLException {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection("jdbc:sqlite:catmash.db");
            PreparedStatement statement = connection.prepareStatement(GET_VOTES_FOR_USERID_SQL);
            statement.setString(1, userId);
            ResultSet resultSet = statement.executeQuery();
            List<Vote> votes = new ArrayList<Vote>();
            while (resultSet.next()) {
                Vote vote = new Vote();
                vote.setCatId1(resultSet.getString(1));
                vote.setCatId2(resultSet.getString(2));
                vote.setFirstCatChosen(resultSet.getBoolean(3));
                votes.add(vote);
            }
            return votes;
        } catch (SQLException e) {
            System.err.println(e.getMessage());
            throw e;
        } finally {
            try {
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                System.err.println(e.getMessage());
            }
        }
    }

    public List<Vote> getVotes() throws SQLException {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection("jdbc:sqlite:catmash.db");
            PreparedStatement statement = connection.prepareStatement(GET_VOTES_SQL);
            ResultSet resultSet = statement.executeQuery();
            List<Vote> votes = new ArrayList<Vote>();
            while (resultSet.next()) {
                Vote vote = new Vote();
                vote.setCatId1(resultSet.getString(1));
                vote.setCatId2(resultSet.getString(2));
                vote.setFirstCatChosen(resultSet.getBoolean(3));
                votes.add(vote);
            }
            return votes;
        } catch (SQLException e) {
            System.err.println(e.getMessage());
            throw e;
        } finally {
            try {
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                System.err.println(e.getMessage());
            }
        }
    }

    public Integer getVoteTotalNumber() throws SQLException {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection("jdbc:sqlite:catmash.db");
            PreparedStatement statement = connection.prepareStatement(GET_VOTES_NUMBER_SQL);
            ResultSet resultSet = statement.executeQuery();
            Integer votesTotalNb = 0;
            while (resultSet.next()) {
                votesTotalNb = resultSet.getInt(1);
            }
            return votesTotalNb;
        } catch (SQLException e) {
            System.err.println(e.getMessage());
            throw e;
        } finally {
            try {
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                System.err.println(e.getMessage());
            }
        }
    }

}
