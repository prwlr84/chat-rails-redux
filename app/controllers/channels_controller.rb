class ChannelsController < ApplicationController
  def show
    if params[:id].blank?
      redirect_to channel_path(Channel.first.name)
    else
      @channel = Channel.find_by(name: params[:id])
      @channels = Channel.all
    end
  end

  def list
    @channels = Channel.all
    channels = @channels
    render json: channels
  end

  def userlist
    @users = User.all
    users = @users
    render json: users
  end
end
